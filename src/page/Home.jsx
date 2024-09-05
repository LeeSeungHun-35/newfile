import React from 'react';
import './Home.css';

const sections = [
    {
        id: 1,
        title: '3-Way Handshke와 Syn Flooding',
        content: [
            { type: 'image', className: 'img' },
            { type: 'text', content: '3-Way Handshke는 통신의 연결과정이다. 이 과정에서 3번의 동작이 진행되는데 SYN, SYN-ACK, ACK이 서로 교환된다.' },
            { type: 'image', className: 'img1' },
            { type: 'text', content: '내용 설명' }
        ]
    },
    {
        id: 2,
        title: 'Syn Flooding 공격 원리',
        content: [
            { type: 'image', className: 'img2' },
            { type: 'text', content: '내용 설명' }
        ]
    },
    {
        id: 3,
        title: '최신 공격 통계 및 시각화된 데이터',
        content: [
            { type: 'text', content: '내용' }
        ]
    }
];

const Main = () => {
    return (
        <div className='Main'>
            {sections.map((section) => (
                <div key={section.id} className={`Network${section.id}`}>
                    <div className='Title'>{section.title}</div>
                    <div className='cont'>
                        {section.content.map((item, index) => {
                            if (item.type === 'image') {
                                return <div key={index} className={item.className} />;
                            }
                            if (item.type === 'text') {
                                return <div key={index} className='text'>{item.content}</div>;
                            }
                            return null;
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
