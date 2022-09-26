import React from 'react'
import ImageWithTitle from '../../components/article/image/ImageWithTitle'
import mainPageStyles from '../../style/pages/mainpage.scss'
type Props = {}

export default function MainPage({}: Props) {
  return (
    <div>
      <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4 '}>
        <div className='left hidden md:block'>
          <ImageWithTitle
            title='Incididunt ad consectetur enim anim ad exercitation non cillum ex excepteur elit eu.'
            height='420px'
            image='https://www.w3schools.com/w3images/lights.jpg'
            fontSize='25px'
            category={{ text: 'demo', color: 'green' }}
          />
        </div>
        <div className={'right grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4'}>
          <div>
            <ImageWithTitle
              title='Incididunt ad consectetur enim anim ad exercitation non cillum ex excepteur elit eu.'
              height='200px'
              image='https://www.w3schools.com/w3images/lights.jpg'
              fontSize='13px'
            />
          </div>
          <div>
            <ImageWithTitle
              title='Incididunt ad consectetur enim anim ad exercitation non cillum ex excepteur elit eu.'
              height='200px'
              image='https://www.w3schools.com/w3images/lights.jpg'
              fontSize='13px'
            />
          </div>
          <div>
            <ImageWithTitle
              title='Incididunt ad consectetur enim anim ad exercitation non cillum ex excepteur elit eu.'
              height='200px'
              image='https://www.w3schools.com/w3images/lights.jpg'
              fontSize='13px'
            />
          </div>
          <div>
            <ImageWithTitle
              title='Incididunt ad consectetur enim anim ad exercitation non cillum ex excepteur elit eu.'
              height='200px'
              image='https://www.w3schools.com/w3images/lights.jpg'
              fontSize='13px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
