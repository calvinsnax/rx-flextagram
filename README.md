# RX-FLEXTAGRAM
RX-FLEXTAGRAM 테마는 [RX-FLEX-LAYOUT](https://github.com/calvinsnax/rx-flex-layout)의 Fork된 개선판인 [RXP-FLEX](https://github.com/rx-public/rxp_flex) 레이아웃을 기반으로 제작된 SNS 스타일의 오픈소스 테마 패키지입니다.

- Design by [CALVINSNAX](https://calvisnax.com/blog)
- RXP_FLEX_LAYOUT by [BNU](https://github.com/bnu)
- RXPublic [RXPublic](https://github.com/rx-public)

> **콘텐츠 위젯 스킨**은 아직 미완성입니다. 기본형, 갤러리형만 쓰시거나 사이드바에만 사용하시는 것을 추천드립니다.

# 배경
사실상 오픈소스 불모지에 가까운 Rhymix 생태계에서 기초적인 테마 생태계를 구성하고자 라이믹스 2.0 이상 최신버전을 대응하는 [RX-FLEX-LAYOUT](https://github.com/calvinsnax/rx-flex-layout)을 제작하였고, 이 정신을 다시 한 번 계승하여 레이아웃+게시판 스킨+컨텐츠 위젯 스킨으로 구성된 오픈소스 테마 패키지를 제작하여 배포하게 되었습니다. 이번에도 많은 굇수 분들의 참여를 통해 더욱 양질의 자료들이 양산되기를 기대합니다. 이번 테마 패키지에서 게시판 스킨은 [SNAX STORE](https://store.calvinsnax.com)에서 유료로 판매되고 있는 Alice Board Skin을 기반으로 제작되었으며, 그 외 #hashtag 레이아웃과 일부 유료 고객들에게만 오픈되었던 Slow-next(beta 버전)의 일부 소스가 반영되었습니다.

컨셉 자체가 SNS이기 때문에 의도적으로 보여지지 않거나 작동하지 않는 기능들이 있습니다. 이 점은 실험적인 작업이자 여러 가능성, 메시지들을 전하기 위한 목적으로 유지될 것입니다.

# License
#### GPL-2.0 License

원작자의 창작물에 대한 존중만 기본적으로 지켜진다면 그 어떠한 방식으로든 사용, 변경, 배포가 가능합니다. 본 소스를 기반으로 유료화 제품을 판매하는 것 또한 허용하지만 테마 패키지로 가공하여 판매할 경우 동일한 디자인 구성으로는 판매할 수 없습니다. (테마를 구성하는 시스템만 가져다 쓸 수 있다는 의미, 본 소스를 통채로 유료 배포하는 것 자체를 금하기 위한 내용입니다.)

# Next Features

앞으로 추가될 기능들에 대한 구현 계획입니다. 상황에 따라 취소될 수도 있습니다.

- 콘텐츠 위젯 제목+이미지, 제목+내용+이미지 템플릿 구현 (현재는 노멀과 갤러리형만 구현되어 있음.)
- 알림목록 구현
- 목록에서 새로고침 없는 좋아요, 댓글 쓰기, 스크랩 구현
- 새로고침 없는 신고 기능 구현
- 마크다운 에디터 지원

<br/>

---

<br/>

> 🚨 **주의:** 본 테마는 완전하지 않습니다. 주기적으로 구조가 변경될 수 있으며, 버그를 동반할 가능성이 있습니다. 사용에 주의를 요합니다.

<br/>

# 설치 방법

1. 최신버전의 소스코드를 다운 받습니다.
2. 다운받은 소스코드 압축파일을 압축 해제합니다.
3. 폴더 안에 있는 layouts, modules, widgets, widgetstyles 폴더를 FTP 등을 이용해 Rhymix가 설치된 루트 디렉토리에 업로드합니다.
4. 사이트 디자인 설정에서 Flextagram Layout이 존재하는지 확인합니다. (보이지 않는다면 캐시파일 재생성을 시도해보세요.)

<br/>

# 메뉴에 아이콘을 추가하는 방법

1. [ionicons](https://ionic.io/ionicons)에서 원하는 아이콘을 찾는다.
2. 메뉴 아이콘 항목에 원하는 아이콘 이름을 넣는다. (예: home, chatbubble 등)
3. 아이콘의 이름에 outline이 들어갈 경우 제외한다. (home-outline일 경우 -> home으로)
4. 전체 아이콘의 갯수가 5개를 넘지 않도록 주의한다.

<br/>

# 사이드 위젯 삽입 및 위젯스타일을 적용하는 방법

1. 메뉴에서 위젯코드 생성 메뉴를 클릭
2. **'RX-FLEXTAGRAM 콘텐츠 위젯 스킨'** 선택
3. 원하는 내용으로 위젯 설정 후 위젯 코드 생성
4. 생성된 코드에 아래와 같은 코드를 추가하여 위젯스타일을 적용할 수 있습니다.

```
widgetstyle="rx-flextagram"
ws_title="위젯제목"
ws_more_url="더보기 링크"
ws_more_text="더보기 텍스트"
```

#### 예시
```html
<img
  class="zbxe_widget_output"
  widget="content"
  skin="rx-flexstagram"
  
  ......

  widgetstyle="rx-flextagram"
  ws_title="위젯제목"
  ws_more_url="더보기 링크"
  ws_more_text="더보기 텍스트"
/>
```