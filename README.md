# Portfolio

개발자 포트폴리오 웹사이트. Astro 기반 정적 사이트로 GitHub Pages에 배포된다.
디자인 시스템은 [`design.md`](./design.md) 참고.

## 커스터마이징 (콘텐츠 교체 포인트)

| 파일 | 내용 |
|---|---|
| `src/data/profile.ts` | 이름, 역할, 소개, 이메일, 소셜 링크 |
| `src/data/projects.ts` | 프로젝트 케이스 스터디 (slug/title/problem/approach/highlights/stack/links) |
| `src/content/career/*.md` | 경력 타임라인 (콘텐츠 컬렉션) |
| `public/projects/*.svg` | 프로젝트 스크린샷 플레이스홀더 → 실제 이미지로 교체 |
| `scripts/generate-og.mjs` | OG 이미지 생성 스크립트 (`npm run og`) |

## 배포 전 체크리스트

1. `astro.config.mjs`의 `site`를 실제 `https://{username}.github.io`로 변경
2. 저장소명을 `{username}.github.io`로 생성 후 main push
3. Settings → Pages → Source를 **GitHub Actions**로 설정
4. `.github/workflows/deploy.yml`가 자동 빌드·배포

## 명령어

```bash
npm install
npm run dev      # 개발 서버
npm run build    # OG 이미지 생성 + 정적 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```
