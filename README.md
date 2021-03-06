# testing

## Official Web Sites

- [Jest](https://jestjs.io/)

## TIL

> Today I Learned

- [테스트 피라미드](TIL/테스트-피라미드.md)
- [단위 테스트](TIL/단위-테스트.md)
- [TDD](TIL/TDD.md)
- [CI, CD](TIL/CI-CD.md)

## Jest

### Setup

1. `sudo npm i jest --global`
2. `jest --init`

- Would you like to use Jest when running "test" script in "package.json"? … yes
- Would you like to use Typescript for the configuration file? … no
- Choose the test environment that will be used for testing › node | jsdom(browser-like)
- Do you want Jest to add coverage reports? … yes
- Which provider should be used to instrument code for coverage? › v8 | babel
- Automatically clear mock calls, instances and results before every test? … yes

3. `npm i -D jest`
4. `npm i -D @types/jest`
5. `npm run test`

### Etc

- `collectCoverage: false`인 경우 커버리지 상태를 보고 싶다면 `jest --coverage`
- 테스트 명령어에 `--watchAll` 옵션을 붙이면 파일이 변경될 때마다 모든 테스트가 다시 실행된다.
- 테스트 명령어에 `--watch` 옵션을 붙이면 커밋되지 않은 수정 중인 파일들에 대하여 테스트가 다시 실행된다.

## 비동기 테스트

- Mock을 이용한 방법 - DI가 없는 경우, 행위 검증이 필요한 경우
- Stub를 이용한 방법 - DI가 있는 경우, 상태 검증이 필요한 경우
