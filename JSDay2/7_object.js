/*
    자바스크립트 데이터타입 : 원시값(number,string,boolean, undefined 등) 을 제외한 함수,배열도 객체 object 입니다.
                : 데이터 타입확인연산자 typeof
    객체 구성 : 프로퍼티(객체의 상태),메소드(객체의 동작/기능)
                객체의 프로퍼티값이 함수일때 메소드 입니다.

    객체 정의  : 자바에서는 클래스를 먼저 정의하고 필요할때 new 연산으로 생성
              자바스크립트는 프로토타입 기반(별도 클래스 정의 없는 형식)이라고 합니다. 바로 객체 리터럴로 생성할 수 있습니다.
*/
let person = { name:'sana',
              age:19,
               sayHi : function(){    //메소드 정의:객체의 프로퍼티값이 함수 정의일때 메소드 입니다.
                console.log(`Hi!! 나는 ${this.name} 입니다.`);   
                console.log('Hi!! 나는' + this.name + '입니다.');   
              } 
            };        //객체리터럴을 이용하여 객체 생성

console.log('이름 : ' + person.name)
console.log('이름 : ' + person['name'])
console.log('나이 : ' + person.age)
console.log('나이 : ' + person['age'])
console.log(person)
person.sayHi();

//새로운 속성 추가
person.color = 'red'


//JSON : 자바스크립트 객체와 서로 변화는 되는 문자열

//          개발자(오라클 계정과 권한)
//          응용프로그램 -----> 서버 -----> 오라클(DBMS)
//                     <----- 오라클에서 select 한 결과를 자바객체로 매핑해서 전달


// OPEN API : 포털서비스, 공공기관, 단체, 학교...데이터를 공개하고 제공.
//            data.go.kr 에서 json 문자열을 제공하는 사례를 찾아보세요.

//                                  REST 서비스
//          개발자          -----   data.go.kr  공개 데이터 --> 서버에 접속
//  자바스크립트,자바                      <-----      JSON 문자열을 전달  <--- (REST 서비스)

//  JSON.parse 메소드는 JSON 문자열을 자바스크립트 객체로 변환. 서버에서 전송받은 데이터를 처리하기 위해 객체로 변환
//  JSON.stringfy 메소드는 자바스크립트 객체를 JSON 문자열로 변환. 자바스크립트 객체를 서버로 전송하기 위해서 문자열로 변환
// ->예제는 8json.html









// 1. https://developers.kakao.com/
// 2. 로그인
// 3. 내 애플리케이션 -> 추가 -> 앱이름 : ooo , 사업자명 : ooo
// 4. 앱설정 : 앱 선택 -> REST API 키 사용함.
//             Web 플랫폼 등록 -> http://127.0.0.1:5503
// 5. REST API 레퍼런스
// https://developers.kakao.com/docs/latest/ko/reference/rest-api-reference 

// 6. 웹문서 검색
// https://developers.kakao.com/tool/rest-api/open/get/v2-search-web

// 7. REST API 테스트 도구
// https://chrome.google.com/webstore/category/extensions?hl=ko   에서 Talend 검색해서 크롬 확장프로그램 추가

// 8. 테스트

// 9. 자바스크립트 AJAX 통신으로 실행해보기
// 