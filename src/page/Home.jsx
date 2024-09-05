import React from 'react'
import './Home.css';
const Main = () => {
    return (
        <div className='Main'>
            <div className='Network1'>
                <div className='Title'>DDoS</div>
                <div className='cont'>
                    <div className='img'>사진</div>
                    <div className='text'>
                        내용 설명
                    </div>
                </div>
            </div>

            <div className='Network2'>
                <div className='Title'>
                    최근의 공격 패턴 변화, 새로운 공격 기법 소개.
                </div>
                <div className='Content'>
                    내용
                </div>
            </div>

            <div className='Network3'>
                <div className='Title'>
                    최신 공격 통계 및 시각화된 데이터.
                </div>
                내용
            </div>
        </div>
    )
}

export default Main