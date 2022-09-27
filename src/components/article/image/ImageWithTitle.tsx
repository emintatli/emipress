type Props = {
  height: string
  image: string
  title: string
  fontSize: string
  category: {
    text: string
    color: string
  }
}
import ImageWithTitleStyles from '../../../style/components/imageWithTitle.module.scss'
export default function ImageWithTitle(props: Props) {
  return (
    <div
      className={'relative hover:drop-shadow-lg cursor-pointer hover:-translate-y-1 duration-300'}
    >
      <h4
        style={{ fontSize: props.fontSize, backgroundColor: props.category?.color }}
        className={ImageWithTitleStyles.categoryTitle}
      >
        {props.category?.text}
      </h4>
      <p style={{ fontSize: props.fontSize }} className={ImageWithTitleStyles.imageTitle}>
        {props.title}
      </p>

      <img
        className={ImageWithTitleStyles.imageWithTitle}
        style={{ objectFit: 'fill', height: props.height, width: '100%' }}
        src={props.image}
      />
    </div>
  )
}
