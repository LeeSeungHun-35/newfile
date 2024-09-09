import React from 'react';
import './Fir.css';

const Fir = () => {
    const layers = [
        { 
            name: 'L7. 응용 계층', 
            description: '네트워킹 서비스를 사용자 애플리케이션에 제공', 
            device: '웹 브라우저, 이메일 클라이언트 등',
            example: '웹 페이지 로드',
            protocol: 'HTTP, FTP'
        },
        { 
            name: 'L6. 표현 계층', 
            description: '응용 프로그램과 네트워크 간 데이터 형식을 변환', 
            device: '암호화 장비, 데이터 변환 소프트웨어',
            example: '데이터 압축',
            protocol: 'SSL/TLS'
        },
        { 
            name: 'L5. 세션 계층', 
            description: '세션을 관리하고 컴퓨터 간 대화를 제어', 
            device: '세션 관리 소프트웨어',
            example: '파일 전송 중 세션 유지',
            protocol: 'NetBIOS'
        },
        { 
            name: 'L4. 전송 계층', 
            description: '신뢰할 수 있는 데이터 전송을 보장', 
            device: '방화벽, 로드 밸런서',
            example: '데이터 전송 확인',
            protocol: 'TCP, UDP'
        },
        { 
            name: 'L3. 네트워크 계층', 
            description: '데이터 패킷의 라우팅과 전달을 처리', 
            device: '라우터',
            example: '패킷 경로 결정',
            protocol: 'IP'
        },
        { 
            name: 'L2. 데이터 링크 계층', 
            description: '노드 간 데이터 전송을 담당', 
            device: '스위치, 브리지',
            example: '프레임 전송',
            protocol: 'Ethernet'
        },
        { 
            name: 'L1. 물리 계층', 
            description: '장치 간의 물리적 연결을 정의', 
            device: '케이블, 허브, 리피터',
            example: '물리적 전송',
            protocol: '없음'
        },
    ];

    return (
        <div className='Fir'>
            <div className='OSI'>
                {layers.map((layer, index) => (
                    <div key={index} className='Layer'>
                        <h2>{layer.name}</h2>
                        <p>{layer.description}</p>
                        <p><strong>관련 장비:</strong> {layer.device}</p>
                        <p><strong>예시:</strong> {layer.example}</p>
                        <p><strong>프로토콜:</strong> {layer.protocol}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fir;
