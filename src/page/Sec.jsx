import React from 'react';
import './Sec.css';

const Sec = () => {
  const terms = [
    { term: '공인 IP', description: <div>인터넷 서비스 제공업체(ISP)가 할당하는 전 세계적으로 유일한 <br/> IP 주소 인터넷 상에서 장치가 다른 네트워크와 통신할 수 있도록 한다</div> },
    { term: '무결성', description: <div>데이터의 일관성과 정확성을 유지하기 위한 보안 속성 전송 중 <br/>데이터가 변경되거나 손상되지 않도록 보장하는 것이 핵심이다</div> },
    { term: '백로그 큐', description: <div>네트워크 장치가 처리해야 할 연결 요청이 쌓이는 대기열이다<br/> SYN Flooding과 같은 공격에서 큐가 가득 차면 서비스 거부가 발생할 수 있다</div> },
    { term: '스푸핑', description: <div>신뢰할 수 있는 엔티티로 가장하여 네트워크 통신을 속이는 공격으로<br/> IP 스푸핑, 이메일 스푸핑 등이 있다</div> },
    { term: '신뢰성', description: <div>네트워크나 시스템이 오류 없이 안정적으로 작동하는 정도<br/> 데이터를 손실 없이 정확하게 전송하는 것이 중요하다</div> },
    { term: '포트', description: <div>네트워크 통신에서 각 장치는 여러 서비스가 실행될 수 있는데, 각 서비스는 고유한 포트 번호로 구분된다. 포트는 0에서 65535까지의 번호를 가질 수 있다.</div> },
    { term: '패킷', description: <div>네트워크를 통해 전송되는 데이터의 작은 조각 패킷은 데이터뿐만 아니라<br/> 목적지 정보, 송신 정보, 오류 탐지 코드 등을 포함한다</div> },
    { term: '큐', description: <div>데이터를 임시로 저장하는 자료 구조이다.<br/> 네트워크 장치에서 데이터 패킷을 처리하기 위해 큐를 사용한다</div> },
    { term: 'Anti-DDoS 장비', description: <div>DDoS 공격을 탐지하고 방어하기 위한 장비이다<br/> 트래픽을 분석하여 악성 요청을 걸러내고 네트워크를 보호한다</div> },
  ];

  return (
    <div className='Analys'>
      DDoS 공격 기법에 나온 용어들 정리
      <table className='word'>
        <thead>
          <tr>
            <th>용어</th>
            <th>의미</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((item, index) => (
            <tr key={index}>
              <td>{item.term}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sec;