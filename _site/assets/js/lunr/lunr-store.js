var store = [{
        "title": "15686 치킨 배달 - 삼성 sw 역량 기출",
        "excerpt":"치킨배달 입력 받을 때 List&lt;int[]&gt; 를 사용하여 집과 치킨집의 좌표를 각각 저장 ​ 1.치킨집과 집과의 거리를 구하는 getDistance함수 구현 - Math라이브러리 사용 ​ 2.집 하나에서 가장 가까운 치킨집과의 거리를 구하는 calMinDistance함수 구현 현재 집의 좌표를 받아서 모든 치킨집 리스트를 돌면서 최소값 리턴 ​ 3.남을 치킨집의 모든 경우를 구할 power함수 구현...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/15686/",
        "teaser":null},{
        "title": "15683 감시 - 삼성 sw 역량 기출",
        "excerpt":"감시 입력 받을 때 cctv라면 List&lt;int[]&gt;에 추가 ​ 1.벽이나 맵의 크기보다 밖이 아니라면 방향을 따라 체크할 수 있는 dfs함수 구현 map을 int형으로 만들었기 때문에 -1값으로 바꿔줌 델타 배열을 만들어서 파라미터로 들어오는 방향으로 dfs를 계속하도록 구현 cctv를 통과할 수 있으므로 위 조건을 만족하면 dfs를 계속하지만 현재 좌표가 cctv라면 -1로 변경하지 않고...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/15683/",
        "teaser":null},{
        "title": "14500 테트로미노 - 삼성 sw 역량 기출",
        "excerpt":"테트로미노 ㅗ 모양을 제외한 것들은 dfs로 합계 구할 수 있음 idx == 4이면 최대값 리턴 시간초과 : visited배열을 계속 생성하는 것이아닌 백트래킹 방식으로 static으로 배열을 생성해 놓고 사용하니 해결됨 ​ ㅗ 모양은 따로 함수를 만들어서 가운데 칸을 기준으로 회전하는 4개 중 최대값을 리턴하는 함수를 만든다 맵보다 큰 것을 검사할 때...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/14500/",
        "teaser":null},{
        "title": "13458 시험 감독 - 삼성 sw 역량 기출",
        "excerpt":"시험감독 1.각 시험장의 인원을 배열로 받아서 각각 B만큼 빼준다 2.각 시험장의 인원을 C로 나눈 후 나머지가 있다면 한명 더 추가 해줌 ​ 시험장의 개수가 1000000, 각 응시자 수가 1000000 이므로 총 감독관의 수는 1000000000000가 되므로 long형으로 받아야 한다 import java.io.BufferedReader; import java.io.IOException; import java.io.InputStreamReader; import java.util.StringTokenizer; public class Main시험감독 {...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/13458/",
        "teaser":null},{
        "title": "3190 뱀 - 삼성 sw 역량 기출",
        "excerpt":"뱀 1.뱀 회전 구현 델타 배열을 ( 오른쪽 0 아래 1 왼쪽 2 위 3 ) 으로 구현하여 회전하는 방향에 따라 현재 방향을 바꿔준다 왼쪽회전은 빼주고 오른쪽회전은 더해주고 ​ 2.입력 맵에 사과 좌표에 1을 찍어준다. 문제의 좌표가 1,1부터 시작하기 때문에 사과좌표에 -1씩 해줌 뱀의 회전 정보는 노드를 생성하여 큐에 저장하였다...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/3190/",
        "teaser":null},{
        "title": "12100 2048(Easy) - 삼성 sw 역량 기출",
        "excerpt":"12100 4 * 4 보드에서 블록을 상하좌우로 이동시킨다. 이 때, 같은 값을 같는 블록이 충돌하면 두 블록은 하나로 합쳐지고 값이 더해지게 된다. 한 번 이동에서 이미 합쳐진 블록은 더이상 합쳐지지 않는다. 최대 5번 이동해서 만들 수 있는 가장 큰 블록의 값은? 방향대로 합쳐지는 것 구현 한 번 시간에 두번 합쳐지는...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/12100/",
        "teaser":null},{
        "title": "13460 구슬 탈출 2 - 삼성 sw 역량 기출",
        "excerpt":"구슽탈출 N * M의 보드에 빨간구슬, 파란구슬, 구멍이 하나 씩 있을 때 회전을 통한 중력으로 빨간 구슬을 빼야한다. 파란 구슬이 빠지거나, 동시에 빠져도 실패이다. 이 때, 최소 몇번의 회전을 통해 빨간 구슬을 꺼낼 수 있을까? 맵을 돌리지 않고 방향마다 중력이 적용되도록 함 gravity 함수에서 구멍을 통과한 구슬의 색을 저장하는 배열...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/12460/",
        "teaser":null},{
        "title": "15684 사다리조작 - 삼성 sw 역량 기출",
        "excerpt":"사다리조작 사다리 게임에서 i번에서 출발하면 i번에 도착하도록 사다리를 조작한다. 추가해야 하는 가로선의 최소값은? 만약 3보다 큰 값이면 -1을 출력한다. ###입력 boolean 이차원 배열을 통해 연결이 되어 있으면 true를 입력해줌 나중에 가장 마지막 세로선 오른쪽의 검사를 편하게 하기 위해 배열의 크기를 +2해줌 ​ ###구현 모든 출발 점과 도착 점이 같은 x좌표를...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/15684/",
        "teaser":null},{
        "title": "5373 큐빙 - 삼성 sw 역량 기출",
        "excerpt":"큐빙 큐브를 돌리는 방법이 주어졌을 때 돌린 후 윗면의 색상을 구해라. 한 면을 시계방향으로 세번 돌리면 시계반대방향으로 한번 돌린 것과 같다 각 면이 시계방향으로 도는 것을 노가다로 구현 각 면의 0,0이 어디에 연결되어 있는지 잘 생각해야 함 면을 돌릴 때 돌리는 면도 회전을 한다 - rotateSelf import java.io.BufferedReader; import java.io.IOException;...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/5373/",
        "teaser":null},{
        "title": "R",
        "excerpt":"R 이해하기 R 데이터 분석을 위한 소프트웨어 다양성 - 어떤 형태의 데이터든 자유롭게 분석가능 가장 많이 사용되는 데이터 분석 툴 R 과 파이선의 차이점 R 데이터 분석용 &gt; 데이터 처리와 통계 분석 기능에 특화 데이터 분석 목적에 유리 파이썬 개발언어 &gt; 라이브러리가 많음 웹 서비스나 소프트웨어 개발에 유리 R과 R...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0day1/",
        "teaser":null},{
        "title": "데이터 프레임",
        "excerpt":"데이터 프레임 데이터 프레임 열 : 속성 &gt; 컬럼,변수 행 : 한 사람의 정보 &gt; Row,Case 한 명에 대한 데이터는 가로 한 줄에 나열 데이터가 크다 = 행이 많다 or 열이 많다 행이 많다 &gt; 컴퓨터가 느려짐 &gt; 고사양 장비 열이 많다 &gt; 분석 방법의 한계 &gt; 고급 분석 방법...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0day2/",
        "teaser":null},{
        "title": "데이터 분석 기초",
        "excerpt":"데이터 분석 기초 데이터 파악 데이터가 주어졌을 때 가장 먼저 하는 일은 데이터의 전반적인 구조를 파악하는 것 데이터 파악 함수 함수 기능 head() 데이터 앞부분 출력 tail() 데이터 뒷부분 출력 View() 뷰어 창에서 데이터 확인 dim() 데이터 차원 출력 str() 데이터 속성 출력 summary() 요약 통계량 출력 head() head(프레임명): 앞에서부터...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%EC%B4%88/",
        "teaser":null},{
        "title": "데이터 가공",
        "excerpt":"데이터 전처리 분석에 적합하게 데이터를 가공하는 작업 - dplyr 활용 조건에 맞는 데이터만 출력 - filter() class가 1인 데이터만 출력 exam %&gt;% filter(class == 1) id class math english science 1 1 1 50 98 50 2 2 1 60 97 60 3 3 1 45 86 78 4 4...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B0%80%EA%B3%B5/",
        "teaser":null},{
        "title": "데이터정제",
        "excerpt":"결측지 정제 결측치는 누락된 값, 비어 있는 값을 말한다 데이터 수집 과정에서의 오류로 인해 결측치가 포함되어 있다면 함수가 적용되지 않거나 분석 결과가 왜곡될 수 있다. 결측치 찾기 sex score 1 M 5 2 F 4 3 &lt;NA&gt; 3 4 M 4 5 F NA NA : 결측치 문자로 구성된 변수는...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A0%95%EC%A0%9C/",
        "teaser":null},{
        "title": "그래프만들기",
        "excerpt":"그래프 데이터를 그래프로 표현하면 추세와 경향성이 드러나기 때문에 특징을 쉽게 이해할 수 있다. ggplot2패키지 : 쉽고 짧은 문법으로 그래프를 만들 수 있다. 산점도, 막대그래프, 선그래프, 상자그림… 레이어 구조 산점도 산점도는 데이터를 x축과 y축에 점으로 표현한 그래프이다 연속 값으로 된 두 변수의 관계를 표현할 때 사용 ex) 나이, 소득 산점도 만들기...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B7%B8%EB%9E%98%ED%94%84%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "한국복지패널데이터분석",
        "excerpt":"한국복지패널데이터 분석준비 데이터 준비 한국복지패널 사이트 - SPSS파일 준비 패키지 설치 및 로드 foreign - SPSS, SAS, STATA 등 다양한 통계분석 소프트웨어를 불러올 수 있다 install.packages(\"foreign\") library(foreign) library(dplyr) library(ggplot2) library(readxl) 데이터 불러오기 foreign 패키지의 read.spss() 원본은 그대로 두고 복사본을 만들어 분석하는 것이 좋다 raw_welfare &lt;- read.spss(file = \"Koweps_hpc10_2015_beta1.sav\", to.data.frame =...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D/",
        "teaser":null},{
        "title": "한국복지패널데이터분석2",
        "excerpt":"나이와 월급의 관계 분석절차 변수 검토 및 전처리 : 나이, 월급 변수 간 관계 분석 : 나이에 따른 월급 평균표, 그래프만들기 나이 변수 검토 및 전처리 변수 검토하기 - 태어난 연도를 이용해서 나이 변수를 만든다 전처리 - 코드표 » 태어난 연도 : 1900 ~ 2014, 모름/무응답 : 9999 - 결측치 없음...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D2/",
        "teaser":null},{
        "title": "텍스트 마이닝",
        "excerpt":"텍스트 마이닝 : 문자로 딘 데이터에서 가치 있는 정보를 얻어 내는 분석 기법 힙합가사 텍스트 마이닝 준비하기 패키지 준비 KoNLP : 한글 자연어 분석 패키지 KoNLP를 사용하기 위해서는 Java가 설치되어 있어야 한다 KoNLP를 위한 패키지 설치 KoNLP를 사용하기 위해서는 rJava, memoise가 설치되어 있어야 한다. 두 패키지를 설치 한 후 KoNLP를...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A7%88%EC%9D%B4%EB%8B%9D/",
        "teaser":null},{
        "title": "지도 시각화",
        "excerpt":"미국 주별 강력 범죄율 단계 구분도 만들기 지역별 통계치를 색깔의 차이로 표현한 지도를 단계구분도라고 한다 단계 구분도를 보면 인구나 소득 같은 특성이 지역별로 얼마나 다른지 쉽게 이해할 수 있다 미국 주별 강력 범죄율 단계 구분도 만들기 패키지 - ggiraphExtra 미국 주별 범죄 데이터 - USArrests &gt; head(USArrests) Murder Assault UrbanPop...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EC%A7%80%EB%8F%84-%EC%8B%9C%EA%B0%81%ED%99%94/",
        "teaser":null},{
        "title": "인터랙티브 그래프",
        "excerpt":"plotly 패키지로 인터랙티브 그래프 만들기 인터랙티브 그래프 : 마우스 움직임에 반응하며 실시간으로 형태가 변하는 그래프 그래프를 자유롭게 조작하면서 관심 있는 부분을 자세히 살펴볼 수 있다 그래프를 HTML 포맷으로 저장하면 일반 사용자들도 웹 브라우저를 이용해 그래프를 조작할 수 있다 인터랙티브 그래프 만들기 패키지 준비 install.pakages(\"plotly\") library(plotly) ggplot2로 그래프 만들기 ggplot2로 만든...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EC%9D%B8%ED%84%B0%EB%9E%99%ED%8B%B0%EB%B8%8C%EA%B7%B8%EB%9E%98%ED%94%84/",
        "teaser":null},{
        "title": "통계 분석 기법을 이용한 가설 검정",
        "excerpt":"통계적 가설 검정이란? 기술 통계와 추론 통계 통계분석은 기술통계와 추론통계로 나뉜다. 기술통계 : 데이터를 요약해 설명하는 기법 ex) 사람들이 받는 월급을 집계해 전체 월급 평균을 구하는 것 추론통계 : 숫자를 요약하는 것을 넘어 어떤 값이 발생할 확률을 계산하는 통계 기법 ex) 수집된 데이터에서 성별에 따라 월급에 차이가 있을 때, 이러한...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EA%B0%80%EC%84%A4%EA%B2%80%EC%A0%95/",
        "teaser":null},{
        "title": "데이터 분석 보고서 만들기",
        "excerpt":"신뢰할 수 있는 데이터 분석 보고서 만들기 R 마크다운을 활용하면 데이터 분석의 전 과정을 담은 보고서를 쉽게 만들 수 있다. HTML, 워드, PDF 등 다양한 포맷으로 저장 가능 &gt; 별도의 문서 작성 프로그램이 필요하지 않다. 데이터 분석 보고서를 신뢰할 수 있으려면 동일한 분석 과정에서 동일한 분석 결과가 나오도록 재현성을 갖춰야...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EB%B3%B4%EA%B3%A0%EC%84%9C%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":null},{
        "title": "내장함수, 변수 타입과 데이터 구조",
        "excerpt":"R 내장 함수로 데이터 추출하기 dplyr 패키지를 사용하지 않고 R 내장 함수만 사용해도 데이터를 추출할 수 있다. dplyr이 내장 함수에 비해 사용하기 쉽고 처리 속도도 빠르다. 하지만 다른 사용자들의 코드를 이해하기 위해 내장함수도 알아야 한다. 내장 함수는 다른 함수들과 조합해 활용할 수 있다. 행 번호로 행 추출하기 데이터 준비 exam...","categories": ["bigdata"],
        "tags": [],
        "url": "http://localhost:4000/bigdata/R%EB%82%B4%EC%9E%A5%ED%95%A8%EC%88%98/",
        "teaser":null},{
        "title": "16234 인구이동 - 삼성 sw 역량 기출",
        "excerpt":"인구이동 한 턴마다 칸마다의 인구차이가 L 이상 R 이하이면 국경선을 개방해 연결된 칸들의 평균으로 맵을 구성하여 인구이동이 없을 때까 지 총 몇턴이 지났는지 구하는 문제이다. dfs구현 dfs를 이용하여 현재 칸 부터 연결될 수 있는 모든 칸을 구한다. dfs 함수가 시작되면 현재 칸을 방문처리하고 현재 칸의 좌표를 리스트에 저장한다. 또한, sum에...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/16234/",
        "teaser":null},{
        "title": "16235 나무 재테크 - 삼성 sw 역량 기출",
        "excerpt":"나무 재테크 N * N 의 땅에 M개의 나무를 심었다. 기본 양분의 값은 모두 5로 동일하다. 봄에는 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가한다. 한 칸에 여러 나무가 있다면 나이가 어린 나무부터 양분을 먹는다. 양분이 부족하면 나무는 즉시 죽는다. 여름에는 봄에 죽은 나무가 양분으로 변한다. 죽은 나무 나이 /...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/16235/",
        "teaser":null},{
        "title": "16236 아기상어 - 삼성 sw 역량 기출",
        "excerpt":"아기상어 N * N 의 공간에 물고기 M 마리와 아기상어 1마리가 있다. 한 칸에 최대 한 마리의 물고기가 존재한다. 처음 아기상어의 크기는 2이고 아기상어가 한 칸씩 이동할 때마다 1초가 지난다. 아기상어는 자기보다 큰 물고기를 지나갈 수 없고, 나머지칸은 지나갈 수 있다. 아기상어와 크기가 같은 물고기는 지나갈 수 있고, 먹을 수는...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/16236/",
        "teaser":null},{
        "title": "17144 미세먼지안녕 - 삼성 sw 역량 테스트 기출",
        "excerpt":"미세먼지 안녕! R * C 크기의 방안에서, 미세먼지가 모든 칸에서 동시에 확산된다. 인접한 네 방향으로 확산된다. 인접한 칸에 공기청정기가 있거나 칸이 없으면 확산이 일어나지 않는다. 확산되는 양은 칸마다 (r,c)/5 이고, 소수점은 버린다. 남은 미세먼지 양은 (r,c) - (r,c)/5 * (확산된 방향의 개수) 이다. 공기청정기가 작동한다. 위쪽 공기청정기는 반시계방향으로 순환하고, 아래쪽은...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/17144/",
        "teaser":null},{
        "title": "블록체인",
        "excerpt":"블록체인의 등장 2009년 비트코인이라는 암호화폐가 등장 비트코인은 탈중앙화된 화폐 탈 중앙화는 많은 지불 결제의 중개에 드는 비용을 줄일 수 있다. 금융기관이 없어도 송금이 가능하다. 블록체인의 역사 - 사이버 펑크 운동 P2P 네트워크 비트코인은 탈중앙화된 장부로 이루어진다. 블록체인은 P2P 네트워크를 통해 거래를 저장한다. 클라이언트/서버는 계층을 두고 데이터를 전송하기 때문에 해킹을 당하면...","categories": ["blockchain"],
        "tags": [],
        "url": "http://localhost:4000/blockchain/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8/",
        "teaser":null},{
        "title": "AI/ML",
        "excerpt":"머신러닝 Supervised Learning Unsupervised Learning Reinforcement Learning : 설정된 환경속에 보상을 주며 학습 Representation Learning Supervised Learning : 지도학습 정답을 주고 학습시키는 머신러닝 방법론 regression Classification 비선형모델 Decision Trees : 예측을 할 수 있음 선형모델 Unsupervised Learning : 비지도학습 정답없는 데이터를 어떻게 구성되었는지 알아내는 머신러닝 학습 방법론 K-means clustering :...","categories": ["AI"],
        "tags": [],
        "url": "http://localhost:4000/ai/AI%EA%B0%95%EC%9D%98/",
        "teaser":null},{
        "title": "Linear Regression",
        "excerpt":"Linear Regression     지도학습 방법 중 하나  ","categories": ["AI"],
        "tags": [],
        "url": "http://localhost:4000/ai/AI%EA%B0%95%EC%9D%982/",
        "teaser":null},{
        "title": "17143 낚시왕 - 삼성 sw 역량 기출",
        "excerpt":"낚시왕 R x C 격자판에 상어가 있다. (1,1) ~ (R,C) 상어는 크기와 속도를 가지고 있다. 낚시꾼은 0행에서 오른쪽으로 이동하고 가장 오른쪽 열에서 멈춘다. 낚시 절차 낚시왕이 오른쪽으로 한 칸 이동한다. 낚시왕이 있는 열에 있는 상어 중 가장 가까운 상어를 잡는다. 잡은 상어는 사라진다. 상어가 이동한다. 상어는 주어진 속도로 칸을 이동한다....","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/17143/",
        "teaser":null},{
        "title": "17140 이차원 배열과 연산 - 삼성 sw 역량 기출",
        "excerpt":"이차원 배열과 연산 크기가 3X3인 배열에 1초가 지날때마다 연산이 적용된다. R 연산 : 모든 행에 대해서 정렬을 수행한다. (행의 개수 &gt;= 열의 개수) C 연산 : 모든 열에 대해서 정렬을 수행한다. (열의 개수 &gt; 행의개수) 정렬 기준 수의 등장 횟수가 커지는 순 등장 횟수가 같은 수가 여러가지면 수가 커지는 순...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/17140/",
        "teaser":null},{
        "title": "17142 연구소3 - 삼성 sw 역량 기출",
        "excerpt":"연구소3 N * N 연구소에 바이러스를 유출한다. 모든 바이러스는 비활성 상태이고, 활성 상태인 바이러스는 상하좌우로 인접한 빈칸으로 복제되며 1초가 걸린다. 연구소는 빈 칸, 벽, 바이러스로 이루어져있다. 0 빈칸, 1 벽, 2 바이러스 위치이다. 활성 바이러스가 비활성 바이러스가 있는 칸으로 가면 비활성 바이러스가 활성으로 변한다. M 개의 바이러스를 활성화 시켰을 때...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/17142/",
        "teaser":null},{
        "title": "atom eslint 적용",
        "excerpt":"준비 pakage &gt; linter-eslint 검색 후 설치하고 나오는 모든 dependency도 설치해야한다. busy-signal intentions linter linter-ui-default 설정 linter가 적용된 프로젝트를 만들어준다. 콘솔창에 vue create lint 입력하면 lint라는 이름의 프로젝트가 생성된다. 다음의 옵션으로 설치를 진행한다. 생성된 프로젝트에서 .eslintrc.js 파일을 원하는 프로젝트의 루트에 복사해준다. 생성된 프로젝트의 pakage.json 내부의 devDependencies를 원하는 프로젝트의 pakage.json devDependencies에...","categories": ["web"],
        "tags": ["vue"],
        "url": "http://localhost:4000/web/atom_linter/",
        "teaser":null},{
        "title": "1938 통나무옮기기",
        "excerpt":"통나무 옮기기 가로, 세로의 길이가 같은 평지에서 벌목을 한다. 1은 잘리지 않은 나무, 0은 아무것도 없음을 나타낸다. 이 지형에서 길이 3인 통나무 BBB를 밀거나 회전시켜 EEE의 위치로 옮기는 작업을 한다. 문제에서 통나무의 길이는 항상 3이며 B의 개수와 E의 개수는 같다. B 0 0 1 1 B 0 0 0 0...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/1938/",
        "teaser":null},{
        "title": "17281 ⚾",
        "excerpt":"⚾ 9으로 이루어진 팀이 야구를 한다. 타자가 공을 쳐서 얻을 수 있는 결과는 안타, 2루타, 3루타, 홈런, 아웃 중 하나이다. 안타 : 타자와 모든 주자가 한 루씩 진루한다. 2루타 : 타자와 모든 주자가 두 루씩 진루한다. 3루타 : 타자와 모든 주자가 세 루씩 진루한다. 홈런 : 타자와 모든 주자가 홈까지...","categories": ["algorithm"],
        "tags": ["boj"],
        "url": "http://localhost:4000/algorithm/17281/",
        "teaser":null},{
        "title": "[모의 SW 역량테스트] 차량 정비소",
        "excerpt":"차량 정비소 N 개의 접수창구, M 개의 정비창구가 있다. 각 창구는 1부터 번호가 붙어있다. 각 창구마다 소요시간이 주어진다. 차량 정비소를 방문한 총 고객은 K명이다. 각 고객이 차량정비소에 도착하는 시간이 고객 번호 순서대로 주어진다. 고객은 정비소에 도착한 후 접수를 한다. 빈창구가 없다면 생길 때 까지 기다린다. 접수 창구의 우선 순위는 다음과...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/2477/",
        "teaser":null},{
        "title": "[모의 SW 역량테스트] 숫자 만들기",
        "excerpt":"숫자 만들기 N개의 숫자가 주어지고 N-1개의 연산자 카드가 주어진다. 숫자 사이에 연산자 카드를 끼워 넣어 다양한 결과값을 구해보기로 한다. 단, 수식을 계산할 때 연산자의 우선순위는 고려하지 않는다. 결과의 최대값과 최소값의 차이를 구하시오. 풀이 주어진 연산자 순서의 모든 경우의 수를 구한다. 반복문을 통해 연산자의 개수가 0이 아닐 경우에만 선택을 할 수...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/4008/",
        "teaser":null},{
        "title": "[모의 SW 역량테스트] 요리사",
        "excerpt":"요리사 두 명의 손님에게 요리를 제공한다. 최대한 비슷한 맛의 요리를 제공해야 한다. N개의 식재료를 N/2개씩 나누어 요리를 하려고 한다. 식재료 i는 j와 함께 요리하게되면 Sij의 시너지가 발생한다. 각 음식의 맛은 음식을 구성하는 식재료로 부터 발생하는 Sij들의 합이다. N과 각 시너지들의 정보가 주어졌을 때, 두 음식간의 차이가 최소인 값을 출력해라. 풀이...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/4012/",
        "teaser":null},{
        "title": "머신러닝의 개념",
        "excerpt":"Machine learning의 개념 기존의 스팸처리나 자율 주행 자동차에는 너무 많은 규칙이 필요합니다. 따라서 이러한 규칙을 입력하는 것보다 프로그램이 데이터를 가지고 학습을 통해 처리하는 것이 머신러닝이 됩니다. 학습하는 방법에 따라 Supervised/Unsupervised learning으로 구분됩니다. supervised learning은 training set이라는 레이블이 달린 데이터를 통해 학습을 하는 것 입니다. 우리가 하나씩 데이터를 입력할 수 없을...","categories": ["AI"],
        "tags": ["AI"],
        "url": "http://localhost:4000/ai/ML1/",
        "teaser":null},{
        "title": "Simple Liner Regression",
        "excerpt":"Regression? regression은 Regression toward the mean 라는 의미를 가지고 있습니다. 전체의 평균으로 되돌아간다. 크거나 작은 데이터들이 나와도 전체적으로 보았을 때 평균으로 되돌아가려는 특징을 가지고 있습니다. Linear Regression 선형 회귀를 한마디로 말하면 데이터를 가장 잘 대변하는 직선의 방정식을 찾는 것 이라고 할수 있습니다. 직선의 방정식 y = ax + b 에서...","categories": ["AI"],
        "tags": ["AI"],
        "url": "http://localhost:4000/ai/ML2/",
        "teaser":null},{
        "title": "[S/W 문제해결 기본] 7일차 - 미로2",
        "excerpt":"미로2 100*100 미로에서 벽 1, 길 0, 출발점 2, 도착점 3 으로 나타낸다. 탈출할 수 있는 미로이면 1, 아니면 2를 출력해라 풀이 간단한 bfs 문제이다. 입력을 받을 때 출발점의 좌표를 저장해 놓고 bfs의 출발점으로 큐에 넣어준다. 맵의 크기를 벗어날 때, 이미 방문했을 때, 0일 때 큐에 넣어서 반복한다. 현재 큐의...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/1227/",
        "teaser":null},{
        "title": "[S/W 문제해결 기본] 9일차 - 사칙연산",
        "excerpt":"사칙연산 사칙연산으로 구성되어 있는 식을 이진트리로 표현한다. 임의의 정점에 연산자가 있으면 해당 연산자의 왼쪽, 오른쪽 서브트리의 결과를 사용해서 연산자를 적용한다. 사칙연산 “+, -, *, /”와 양의 정수로만 구성된 임의의 이진트리가 주어질 때, 이를 계산한 결과를 출력하는 프로그램을 작성하라. 풀이 재귀를 이용해서 서브트리의 값을 구해서 최종 결과를 구해야 한다. 각 노드의...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/1232/",
        "teaser":null},{
        "title": "[S/W 문제해결 기본] 4일차 - 길찾기",
        "excerpt":"길찾기 길 중간 중간에는 최대 2개의 갈림길이 존재하고, 모든 길은 일방 통행으로 되돌아오는 것이 불가능하다. 다음과 같이 길이 주어질 때, A도시에서 B도시로 가는 길이 존재하는지 알아내는 프로그램을 작성하여라. A와 B는 숫자 0과 99으로 고정된다. 모든 길은 순서쌍으로 나타내어진다. 위 예시에서 2번에서 출발 할 수 있는 길의 표현은 (2, 5), (2,...","categories": ["algorithm"],
        "tags": ["swexpert"],
        "url": "http://localhost:4000/algorithm/1219/",
        "teaser":null},{
        "title": "Simple Liner Regression 2",
        "excerpt":"Hypothesis and Cost cost를 다시 생각해보자면, y는 실제값입니다. 또한, 우리의 가설에서 실제값을 뺀 값을 에러라고 합니다. 이 에러를 제곱한 것의 평균을 cost라고 정의하고 있습니다. 위의 예제는 input 과 output이 같은 모델으로 우리가 w,b의 값이 1과 0이라는 사실을 알고 있습니다. W, b를 구하기 위해 초기값을 임의의 값으로 지정해 줍니다. 이렇게 되면...","categories": ["AI"],
        "tags": ["AI"],
        "url": "http://localhost:4000/ai/ML2/",
        "teaser":null},{
        "title": "Ml4",
        "excerpt":"Cost minimalize Cost 함수를 파이썬과 텐서플로우 코드로 작성 해보겠습니다. Cost Function in pure Python import numpy as np X = np.array([1,2,3]) Y = np.array([1,2,3]) def cost_func(W, X, Y): c = 0 for i in range(len(X)): c += (W * X[i] - Y[i]) ** 2 return c / len(X) # W...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/ML4/",
        "teaser":null},{
        "title": "컴퓨터 네트워크 정리",
        "excerpt":"컴퓨터 네트워크 HTTP의 GET과 POST비교 둘 다 http 프로토콜을 이용해서 서버에 무엇인 가를 요청할 때 사용하는 방식 GET 요청하는 데이터가 HTTP request message의 헤더 부분의 url에 담겨서 전송됨 url 상에 ? 뒤에 데이터가 붙어 request를 내보낸다. 전송할 수 있는 데이터의 크기 제한적 보안이 필요한 데이터는 url에 노출 되므로 적절하지 않다....","categories": ["network"],
        "tags": ["network"],
        "url": "http://localhost:4000/network/%EC%BB%B4%ED%93%A8%ED%84%B0-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/",
        "teaser":null},{
        "title": "자료구조 정리",
        "excerpt":"Array 인덱스로 해당 원소에 접근할 수 있다. 찾고자 하는 원소의 인덱스 값을 알고 있으면 O(1)에 해당 원소로 접근할 수 있다. 하지만 삭제 또는 삽입의 과정에서는 해당 원소에 접근하여 작업을 완료한 뒤, 작업을 추가적으로 해줘야하기 때문에 시간이 더 걸린다. 만약 배열의 원소 중 어느 원소를 삭제했다고 했을 때, 배열의 빈공간이 생기므로...","categories": ["data","structure"],
        "tags": ["data","structure"],
        "url": "http://localhost:4000/data/structure/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/",
        "teaser":null},{
        "title": "운영체제 정리",
        "excerpt":"프로세스와 스레드의 차이 프로세스 실행 중인 프로그램 메모리에 적재되어 cpu의 할당을 받을 수 있는 것 OS로부터 주소공간, 파일, 메모리 등을 할당받은 것 함수의 매개변수, 임시 자료를 갖는 프로세스 스택, 전역 변수를 수록하는 데이터 섹션 포함 프로세스 제어 블록 (Process Control Block, PCB) 특정 프로세스에 대한 중요한 정보를 저장한 OS의 자료구조...","categories": ["OS"],
        "tags": ["OS"],
        "url": "http://localhost:4000/os/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C/",
        "teaser":null},{
        "title": "os 요약",
        "excerpt":"프로세스 vs 스레드 프로세스 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램 운영체제로부터 시스템 자원을 할당받는 작업의 단위 스레드 프로세스 내에서 실행되는 여러 흐름의 단위 프로세스의 특정한 수행 경로 자바 스레드 일반 스레드와 같다. JVM이 운영체제역할 자바에는 프로세스가 존재하지 않고 스레드만 존재 멀티 프로세스 vs 멀티 스레드 멀티 프로세스 하나의 응용프로그램을 여러...","categories": ["os"],
        "tags": ["os"],
        "url": "http://localhost:4000/os/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C%EC%9A%94%EC%95%BD/",
        "teaser":null},{
        "title": "스킬트리 (level2)",
        "excerpt":"스킬트리   sdfsfase fas df sd  ","categories": ["algorithm"],
        "tags": ["programers"],
        "url": "http://localhost:4000/algorithm/%EC%8A%A4%ED%82%AC%ED%8A%B8%EB%A6%AC/",
        "teaser":null}]
