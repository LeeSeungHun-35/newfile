import React from 'react'
import './Home.css';
const Main = () => {
    return (
        <div className='Main'>
            <div className='Network1'>
                <div className='Title'>Syn Flooding</div>
                <div className='cont'>
                    <div className='img1'>사진</div>
                    <div className='text'>
                        내용 설명
                    </div>
                </div>
            </div>

            <div className='Network2'>
                <div className='Title'>DDoS 공격 원리</div>
                <div className='cont'>
                    <div className='img2'>사진</div>
                    <div className='text'>
                        내용 설명
                    </div>
                </div>

            </div>

            <div className='Network3'>
                <div className='Title'>
                    최신 공격 통계 및 시각화된 데이터
                </div>                내용
            </div>
        </div>
    )
}

export default Main