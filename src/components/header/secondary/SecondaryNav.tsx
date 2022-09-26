import secondaryNavStyles from '../../../style/components/secondary-nav.module.scss'
import { Twitter } from 'css.gg'
type Props = {}

export default function SecondaryNav({}: Props) {
  return (
    <div className={secondaryNavStyles.secondaryNav}>
      <div className='container mx-auto flex justify-between items-center'>
        <span>
          Eiusmod qui deserunt |{' '}
          <span className='text-sm'>
            Eiusmod qui deserunt deserunt sunt proident eiusmod deserunt.
          </span>
        </span>
        <span className='flex justify-between items-center'>
          <Twitter />
        </span>
      </div>
    </div>
  )
}
