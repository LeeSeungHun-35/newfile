import React from 'react';
import './Home.css';

const sections = [
    {
        id: 1,
        title: '3-Way Handshake와 Syn Flooding',
        content: [
            { type: 'image', className: 'img' },
            {
                type: 'text', content: <div>
                    TCP 통신을 위해 서로 준비가 되었는지를 확인하는 3단계 절차<br />
                    <div className='smaller'>1. Client는 Server에게 SYN을 전송한다.<br />
                        2. SYN을 전송받은 Server는 SYN을 정상적으로 수신하였다는 뜻으로 SYN-ACK을 전송한다<br />
                        3. Client는 SYN-ACK을 정상 수신했다는 의미로 ACK을 Server에게 전송 후 연결이 된다<br />
                        4. 이후에 Client는 Server에게 데이터를 요청하고 상호 간 데이터를 송수신을 할 수 있게 된다
                        <br /><br />
                        TCP 프로토콜은 데이터의 신뢰성과 무결성을 보장하고 후속 데이터 전송의 안정성을 확보할 수 있다. 그리고 이 연결 과정은 네트워크 통신의
                        기본적인 부분으로 다른 네트워크 프로토콜이나 보안 기술을 이해하는 데 유용하다.</div>
                </div>
            },
            { type: 'image', className: 'img1' },
            {
                type: 'text', content: <div>
                    서버의 백로그 큐를 가득 채워 서비스 거부 상태를 일으키는 방식 <br /><br />
                    <div className='smaller'>1. 공격자는 계속 IP를 바꿔가며 많은 양의 SYN 패킷을 보내고, <br />2. 서버는 이 패킷에 대해 SYN-ACK 응답을 보내며
                        ACK 응답을 기다린다. <br />3. 그러나 공격자는 ACK 응답을 보내지 않고 IP를 변경하면서 패킷을 보내기 떄문에<br />
                        4. 큐가 가득 차서 정상적인 클라이언트의 연결 요청을 처리할 수 없게 된다.<br />
                        5. 정상적인 연결을 처리하지 못해 다른 사용자에게도 서비스를 제공할 수 없게 된다.<br /><br />
                        서버는 사용자들의 요청에 항상 답장을 보내야 하지만 동시에 많은 요청이 들어오면 <br />서버는 모든 요청에 답장할 수 없어 오류가 발생, 정상적인 서비스를 제공 X<br /><br />
                        일상에서의 비유: 수강신청, 콘서트 티켓팅
                    </div>
                </div>
            }
        ]
    },

    {
        id: 2,
        title: 'Syn Flooding 공격 패킷분석',
        content: [
            { type: 'image', className: 'img2' },
            {
                type: 'text', content: <div>
                    공격자(빨간색)
                    <div className='smaller'>
                        <li>IP를 스푸핑하여 다양한 IP 주소로 패킷을 전송하는 것을 확인할 수 있다.</li>
                        <li>공격자는 0초에서 시작하여 750개의 SYN 패킷을 0.002307초 만에 서버로 전송했다.</li>
                        <li>공격자는 여러 IP를 사용하여 본인의 진짜 IP를 숨기고, 추적을 어렵게 만든다.</li>
                    </div><br />
                    패킷의 상태(초록색)
                    <div className='smaller'>

                        <li>서버가 특정 포트에서만 SYN 요청이 반복되는 것을 감지, 차단하지 못하게 공격자는 포트를 바꿔가며 공격을 한다.</li>
                        <li>80번 포트를 사용하는 것은 서버가 HTTP 웹 서버라는 것을 알 수 있다.</li>
                        <li>모두 Seq=0, Win=0, Len=0으로 설정되어 있는데 이건 공격자가 서버 자원을 소모시키기 위해 많은 비정상적인 연결 요청을 보내고 있다는 뜻이다.<br /> </li>
                    </div>
                    <br />
                    <div className='summa'>
                        <div className='ttitle'>요약</div>
                        <div className='explain'>
                            <li>공격자는 스푸핑으로 다양한 IP 주소로 많은 SYN 패킷을 전송해서 본인 IP를 숨기고 추적을 어렵게 만든다.</li>
                            <li>또한, 특정 포트를 변경하면서 공격을 수행하여 반복적인 SYN 요청이 특정 포트에 집중되지 않도록 한다.</li>
                            <li>80번 포트는 HTTP 웹 서버를 대상으로 한다.</li> 
                            <li>모든 패킷의 Seq=0, Win=0, Len=0은 공격자가 비정상적인 요청으로 서버 자원을 소모시키려는 의도이다.</li>
                        </div>
                    </div>
                </div>
            }
        ]
    },

    {
        id: 3,
        title: '대응 방안',
        content: [
            { type: 'text', content: '서버 구간에서의 설정' },
            { type: 'text', content: '차단 장비에서의 설정' }
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