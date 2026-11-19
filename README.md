# yaongisgreat.com

1인 인디 게임 스튜디오 yaongisgreat의 웹사이트. 빌드 도구 없는 정적 HTML/CSS/JS이고, GitHub Pages로 호스팅한다.

## 구조

```
index.html                 홈 (스튜디오 소개, 게임 목록, 연락처)
games/mossy-box/index.html Mossy Box 게임 페이지
privacy/index.html         개인정보처리방침 (스토어 등록에 필요)
404.html                   없는 페이지
assets/site.css            공통 스타일 (색은 :root 변수)
assets/site.js             한국어/영어 전환, 스크린샷 확대
assets/games/mossy-box/    스토어 아트 사본 (D:\chillpaludarium\docs\store_art 에서 복사)
CNAME                      GitHub Pages 커스텀 도메인
```

## 한국어/영어

같은 내용을 `<span class="en">`과 `<span class="ko">`로 나란히 쓴다. `<html>`의 `lang-en` / `lang-ko` 클래스가 한쪽을 숨긴다.
처음 방문하면 브라우저 언어를 따르고, 오른쪽 위 버튼으로 바꾼 언어는 브라우저에 기억된다.

## 로컬에서 보기

```bash
python -m http.server 8123
```

브라우저에서 http://localhost:8123 을 연다.

## 새 게임 추가하기

1. `games/mossy-box/` 폴더를 복사해 `games/<새-게임>/`을 만들고 내용과 이미지를 바꾼다.
2. `index.html`의 `#games` 안에 있는 `game-card` 하나를 복사해 수정한다(자리 채움용 `placeholder` 카드는 지워도 된다).
3. `sitemap.xml`에 주소를 추가한다.

## GitHub Pages 배포

1. GitHub에서 공개 저장소를 만든다 (예: `yaongisgreat.com`).
2. 이 폴더에서:
   ```bash
   git init -b main
   git add .
   git commit -m "First version of yaongisgreat.com"
   git remote add origin https://github.com/<아이디>/yaongisgreat.com.git
   git push -u origin main
   ```
3. 저장소 Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)`.
4. Custom domain에 `yaongisgreat.com`이 들어가 있는지 확인한다 (`CNAME` 파일이 넣어 준다).
5. DNS (Cloudflare를 쓴다면 처음엔 회색 구름 / DNS only):

   | 유형 | 이름 | 값 |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<아이디>.github.io` |

   메일용 MX 레코드와 `mail` 서브도메인 A 레코드(OCI IP)는 이것과 겹치지 않는다.
6. 인증서가 발급되면 Settings → Pages에서 **Enforce HTTPS**를 켠다.
7. 계정 Settings → Pages → **Verified domains**에서 도메인을 인증해 둔다 (도메인 탈취 방지).

## 할 일

- [ ] Microsoft Store 링크가 생기면 `games/mossy-box/index.html`의 주석 처리된 버튼을 살린다.
- [ ] 트레일러는 파일이 커서(약 46MB) 넣지 않았다. YouTube에 올리면 게임 페이지에 임베드한다.
- [ ] 스팀 페이지가 공개되기 전에는 Steam 링크가 열리지 않는다.
