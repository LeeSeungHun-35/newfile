import React from 'react';
import './Home.css';

const sections = [
    {
        id: 1,
        title: '3-Way Handshke와 Syn Flooding',
        content: [
            { type: 'image', className: 'img' },
            {type: 'text', content: <div>
  TCP 통신을 위해 서로 준비가 되었는지를 확인하는 3단계 절차.<br />
  <div className='smaller'>1. Client는 Server에게 SYN을 전송한다.<br />
  2. SYN을 전송받은 Server는 SYN을 정상적으로 수신하였다는 뜻으로 SYN-ACK을 전송한다.<br />
  3. Client는 SYN-ACK을 정상 수신했다는 의미로 ACK을 Server에게 전송 후 연결이 된다.<br />    
  4. 이후에 Client는 Server에게 데이터를 요청하고 상호 간 데이터를 송수신을 할 수 있게 된다.</div>
</div>
},
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
        title: '대응 방안',
        content: [
            { type: 'text', content: '서버 구간에서의 설정 방안' },
            { type: 'text', content: '차단 장비에서의 설정 방안' }
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
