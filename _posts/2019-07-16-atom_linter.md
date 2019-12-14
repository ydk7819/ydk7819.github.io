---
title: "atom eslint 적용"
classes: wide
categories: web
date : 2019-07-16 17:48:00
feature_image: "https://fossbytes.com/wp-content/uploads/2017/09/atom-ide-github-1.png"
feature_text: |
  ## atom eslint 적용
tags: vue
---

## 준비

pakage > linter-eslint 검색 후 설치하고 나오는 모든 dependency도 설치해야한다.
![lint](/assets/images/eslint4.PNG)
- busy-signal
- intentions
- linter
- linter-ui-default

## 설정

1. linter가 적용된 프로젝트를 만들어준다.
    - 콘솔창에 `vue create lint` 입력하면 lint라는 이름의 프로젝트가 생성된다.
    - ![lint](/assets/images/eslint1.PNG)
    - 다음의 옵션으로 설치를 진행한다.

2. 생성된 프로젝트에서 `.eslintrc.js` 파일을 원하는 프로젝트의 루트에 복사해준다.

3. 생성된 프로젝트의 pakage.json 내부의 `devDependencies`를 원하는 프로젝트의 pakage.json `devDependencies`에 추가한다.
    - ![lint](/assets/images/eslint2.PNG)
    - 추가후 npm istall 진행

4. atom pakage의 linter-eslint의 settings에 `text.html.vue`를 추가해준다.
    - ![lint](/assets/images/eslint3.PNG)

5. atom을 재시작한다.
