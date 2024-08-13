## Next 시작하기

1. 디렉토리 구조

- app : 라우팅 + 보여지는 페이지가 있는 디렉토리
- components : atomic 한 컴포넌트들이 있는 디렉토리
- lib : 외부 라이브러리가 있는 디렉토리
- actions :
- types :
- datas :
- providers :

2. 앱 라우팅

- app 디렉토리안의 디렉토리 구조에 따른 라우팅
  - ex. app/product : {ip}/product
- 디렉토리 이름을 ()로 감싸면 해당 디렉토리는 라우팅 무시
  - ex. (auth) 디렉토리 안에 sign-up 디렉토리 : {ip}/sugn-up
- 동적 라우팅은 []를 통해서 가능
  - ex. product 디렉토리 안에 [productId] : {ip}/product/{productId}

3. shadcn

- npx shadcn-ui@latest init
- 자동으로 lib 디렉토리안에 utils.ts 생기고 tailwind.config.ts 엡데이트 되면서 설정 됨
- 사용할 components 를 인스톨해서 사용하기
  - ex. npx shadcn-ui@latest add button : 버튼 추가하면 components/ui 폴더 안에 button.tsx 파일 생김
- Dialog : Modal 대신 HTML에서 새로생긴 Dialog를 활용하여 Dialog Component를 만들어져있음.
