// 전역에서 clusterer 객체를 참조할 수 있도록 설정
if (typeof clusterer === 'undefined') {
    var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
        averageCenter: true, // 클러스터의 중앙을 계산하여 위치를 설정
        minLevel: 5 // 클러스터링을 시작할 최소 지도 레벨
    });
}

// 기존 클러스터 마커를 제거하는 함수
function clearClusterMarkers() {
    if (typeof clusterer !== 'undefined') {
        clusterer.clear(); // 모든 클러스터 마커를 제거합니다.
    }
}

var button = document.getElementById("23년도퇴원생");
button.addEventListener("click", function() {
    clearClusterMarkers(); // 기존 마커들을 먼저 제거  
var positions = [
    {'lat': 37.2432391, 'lng': 127.0449613},
    {'lat': 37.1909464, 'lng': 127.0641362},
    {'lat': 37.1909464, 'lng': 127.0641362},
    {'lat': 37.1429683, 'lng': 127.0890934},
    {'lat': 37.1851273, 'lng': 127.0403842},
    {'lat': 37.1949533, 'lng': 127.0218096},
    {'lat': 37.1954299, 'lng': 127.0647128},
    {'lat': 37.1955229, 'lng': 127.0644691},
    {'lat': 37.2399053, 'lng': 127.0760648},
    {'lat': 37.0560447, 'lng': 127.0427139},
    {'lat': 37.1985906, 'lng': 127.0494363},
    {'lat': 37.2062347, 'lng': 127.0747393},
    {'lat': 37.2096934, 'lng': 127.0786992},
    {'lat': 37.1964117, 'lng': 127.0889968},
    {'lat': 37.1964117, 'lng': 127.0889968},
    {'lat': 37.1860213, 'lng': 127.088143},
    {'lat': 37.1860213, 'lng': 127.088143},
    {'lat': 37.1989404, 'lng': 127.0889054},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.1891956, 'lng': 127.0896985},
    {'lat': 37.2005644, 'lng': 127.0572605},
    {'lat': 37.2005644, 'lng': 127.0572605},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2030819, 'lng': 127.0577853},
    {'lat': 37.2027218, 'lng': 127.0580475},
    {'lat': 37.2003744, 'lng': 127.0543953},
    {'lat': 37.2003744, 'lng': 127.0543953},
    {'lat': 37.2003744, 'lng': 127.0543953},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2021608, 'lng': 127.0552977},
    {'lat': 37.2002529, 'lng': 127.0633226},
    {'lat': 37.2002529, 'lng': 127.0633226},
    {'lat': 37.2008121, 'lng': 127.0607401},
    {'lat': 37.2027024, 'lng': 127.0899176},
    {'lat': 37.2040938, 'lng': 127.0887206},
    {'lat': 37.2040938, 'lng': 127.0887206},
    {'lat': 37.2040938, 'lng': 127.0887206},
    {'lat': 37.2040938, 'lng': 127.0887206},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.195286, 'lng': 127.0912499},
    {'lat': 37.195286, 'lng': 127.0912499},
    {'lat': 37.195286, 'lng': 127.0912499},
    {'lat': 37.195286, 'lng': 127.0912499},
    {'lat': 37.195286, 'lng': 127.0912499},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.1962716, 'lng': 127.0910367},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.2029661, 'lng': 127.0906923},
    {'lat': 37.1847326, 'lng': 127.0852897},
    {'lat': 37.2072118, 'lng': 127.0935947},
    {'lat': 37.1910923, 'lng': 127.0728524},
    {'lat': 37.1910923, 'lng': 127.0728524},
    {'lat': 37.1910923, 'lng': 127.0728524},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1712824, 'lng': 127.1044705},
    {'lat': 37.1962177, 'lng': 127.0974142},
    {'lat': 37.1962177, 'lng': 127.0974142},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.174129, 'lng': 127.1085879},
    {'lat': 37.1821216, 'lng': 127.1053026},
    {'lat': 37.206547, 'lng': 127.1020107},
    {'lat': 37.206547, 'lng': 127.1020107},
    {'lat': 37.2083779, 'lng': 127.1013068},
    {'lat': 37.2083779, 'lng': 127.1013068},
    {'lat': 37.2083779, 'lng': 127.1013068},
    {'lat': 37.2170753, 'lng': 127.1120021},
    {'lat': 37.2170753, 'lng': 127.1120021},
    {'lat': 37.2119157, 'lng': 127.1124695},
    {'lat': 37.2119157, 'lng': 127.1124695},
    {'lat': 37.2119157, 'lng': 127.1124695},
    {'lat': 37.215561, 'lng': 127.0920353},
    {'lat': 37.215561, 'lng': 127.0920353},
    {'lat': 37.215561, 'lng': 127.0920353},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.2062085, 'lng': 127.1164211},
    {'lat': 37.1644939, 'lng': 127.1051012},
    {'lat': 37.1584233, 'lng': 127.1116261},
    {'lat': 37.1584233, 'lng': 127.1116261},
    {'lat': 37.1620183, 'lng': 127.1205895},
    {'lat': 37.1597601, 'lng': 127.1210078},
    {'lat': 37.1625858, 'lng': 127.1174625},
    {'lat': 37.1672011, 'lng': 127.1089588},
    {'lat': 37.167646, 'lng': 127.1116659},
    {'lat': 37.1715375, 'lng': 127.1090252},
    {'lat': 37.1715375, 'lng': 127.1090252},
    {'lat': 37.1715375, 'lng': 127.1090252},
    {'lat': 37.1715375, 'lng': 127.1090252},
    {'lat': 37.1715375, 'lng': 127.1090252},
    {'lat': 37.1739373, 'lng': 127.1038435},
    {'lat': 37.1739373, 'lng': 127.1038435},
    {'lat': 37.1739373, 'lng': 127.1038435},
    {'lat': 37.1739373, 'lng': 127.1038435},
    {'lat': 37.1976581, 'lng': 127.1100019},
    {'lat': 37.1976581, 'lng': 127.1100019},
    {'lat': 37.1976581, 'lng': 127.1100019},
    {'lat': 37.1976581, 'lng': 127.1100019},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.1991403, 'lng': 127.1144275},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.2022361, 'lng': 127.1119664},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.1985068, 'lng': 127.1000673},
    {'lat': 37.202389, 'lng': 127.1080263},
    {'lat': 37.202389, 'lng': 127.1080263},
    {'lat': 37.202389, 'lng': 127.1080263},
    {'lat': 37.202389, 'lng': 127.1080263},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.1974276, 'lng': 127.1025942},
    {'lat': 37.2013359, 'lng': 127.1034648},
    {'lat': 37.2013359, 'lng': 127.1034648},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2025549, 'lng': 127.1046371},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.2029731, 'lng': 127.1004673},
    {'lat': 37.1986911, 'lng': 127.1064661},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1980963, 'lng': 127.0712609},
    {'lat': 37.1980963, 'lng': 127.0712609},
    {'lat': 37.1980963, 'lng': 127.0712609},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1971378, 'lng': 127.0708589},
    {'lat': 37.1971378, 'lng': 127.0708589},
    {'lat': 37.1971378, 'lng': 127.0708589},
    {'lat': 37.197359, 'lng': 127.0715264},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1977329, 'lng': 127.0701857},
    {'lat': 37.1995257, 'lng': 127.0693598},
    {'lat': 37.1995257, 'lng': 127.0693598},
    {'lat': 37.2052385, 'lng': 127.0730211},
    {'lat': 37.2052385, 'lng': 127.0730211},
    {'lat': 37.2005418, 'lng': 127.0724335},
    {'lat': 37.2041612, 'lng': 127.072645},
    {'lat': 37.2037474, 'lng': 127.0721928},
    {'lat': 37.2037474, 'lng': 127.0721928},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.2080809, 'lng': 127.0714258},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.211563, 'lng': 127.072851},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2082747, 'lng': 127.0756645},
    {'lat': 37.2100245, 'lng': 127.0763866},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.2123622, 'lng': 127.0776182},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.1929571, 'lng': 127.0752901},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.194756, 'lng': 127.0767407},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1956336999999, 'lng': 127.071992},
    {'lat': 37.1947763, 'lng': 127.0723041},
    {'lat': 37.1947763, 'lng': 127.0723041},
    {'lat': 37.1938328, 'lng': 127.0718602},
    {'lat': 37.1944717, 'lng': 127.0711927},
    {'lat': 37.1944717, 'lng': 127.0711927},
    {'lat': 37.1950266, 'lng': 127.0705271},
    {'lat': 37.1950266, 'lng': 127.0705271},
    {'lat': 37.1947763, 'lng': 127.0723041},
    {'lat': 37.1955462, 'lng': 127.0714054},
    {'lat': 37.1955462, 'lng': 127.0714054},
    {'lat': 37.1955462, 'lng': 127.0714054},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.1973195, 'lng': 127.0730498},
    {'lat': 37.198101, 'lng': 127.071765},
    {'lat': 37.198101, 'lng': 127.071765},
    {'lat': 37.1776288999999, 'lng': 127.1152925},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.2077748, 'lng': 127.0900657},
    {'lat': 37.1656723, 'lng': 127.129402},
    {'lat': 37.173131, 'lng': 127.1182405},
    {'lat': 37.173131, 'lng': 127.1182405},
    {'lat': 37.1736574, 'lng': 127.1200475},
    {'lat': 37.1878708, 'lng': 127.1223759},
    {'lat': 37.1878708, 'lng': 127.1223759},
    {'lat': 37.1878708, 'lng': 127.1223759},
    {'lat': 37.1847529, 'lng': 127.1210298},
    {'lat': 37.1708733, 'lng': 127.0975652},
    {'lat': 37.1889022, 'lng': 127.1276803},
    {'lat': 37.1889022, 'lng': 127.1276803},
    {'lat': 37.1862691, 'lng': 127.1276458},
    {'lat': 37.1862691, 'lng': 127.1276458},
    {'lat': 37.1866114, 'lng': 127.1252207},
    {'lat': 37.1866114, 'lng': 127.1252207},
    {'lat': 37.1866114, 'lng': 127.1252207},
    {'lat': 37.1866114, 'lng': 127.1252207},
    {'lat': 37.1866114, 'lng': 127.1252207},
    {'lat': 37.2009173, 'lng': 127.116522},
    {'lat': 37.2009173, 'lng': 127.116522},
    {'lat': 37.2009173, 'lng': 127.116522},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1960148, 'lng': 127.1133935},
    {'lat': 37.1970008, 'lng': 127.1148319},
    {'lat': 37.1970008, 'lng': 127.1148319},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.1957077, 'lng': 127.1213903},
    {'lat': 37.198252, 'lng': 127.1185749},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.1983168, 'lng': 127.1206004},
    {'lat': 37.2048645, 'lng': 127.1109147},
    {'lat': 37.2048592, 'lng': 127.1110332},
    {'lat': 37.2089015, 'lng': 127.1169371},
    {'lat': 37.2089015, 'lng': 127.1169371},
    {'lat': 37.2110298, 'lng': 127.1201017},
    {'lat': 37.2105302, 'lng': 127.104617},
    {'lat': 37.2105302, 'lng': 127.104617},
    {'lat': 37.2105302, 'lng': 127.104617},
    {'lat': 37.2053596, 'lng': 127.1088455},
    {'lat': 37.1645742, 'lng': 127.1091795},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2100392, 'lng': 127.0503139},
    {'lat': 37.2075262, 'lng': 127.0515861},
    {'lat': 37.2075262, 'lng': 127.0515861},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.206997, 'lng': 127.05425},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2097692, 'lng': 127.0592774},
    {'lat': 37.2085354, 'lng': 127.0576968},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2064277, 'lng': 127.0577274},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.2079238, 'lng': 127.0673448},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.2095215, 'lng': 127.0689123},
    {'lat': 37.2095215, 'lng': 127.0689123},
    {'lat': 37.2095215, 'lng': 127.0689123},
    {'lat': 37.2095215, 'lng': 127.0689123},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.1755018, 'lng': 127.1238244},
    {'lat': 37.1806294, 'lng': 127.1168376},
    {'lat': 37.1806294, 'lng': 127.1168376},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1991893, 'lng': 127.09744},
    {'lat': 37.1914746, 'lng': 127.0977858},
    {'lat': 37.1914746, 'lng': 127.0977858},
    {'lat': 37.1914746, 'lng': 127.0977858},
    {'lat': 37.1914746, 'lng': 127.0977858},
    {'lat': 37.1914746, 'lng': 127.0977858},
    {'lat': 37.2114492, 'lng': 127.0612974},
    {'lat': 37.2125066, 'lng': 127.0570019},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.1966718, 'lng': 127.0675497},
    {'lat': 37.1998322, 'lng': 127.0692749},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2026182, 'lng': 127.0658612},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2027885, 'lng': 127.0684595},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2027885, 'lng': 127.0684595},
    {'lat': 37.2027885, 'lng': 127.0684595},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.207695, 'lng': 127.069034},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.2042026, 'lng': 127.0687795},
    {'lat': 37.1902086, 'lng': 127.0759808},
    {'lat': 37.1902086, 'lng': 127.0759808},
    {'lat': 37.1910923, 'lng': 127.0728524},
    {'lat': 37.2046084, 'lng': 127.0720539},
    {'lat': 37.2046084, 'lng': 127.0720539},
    {'lat': 37.2114035, 'lng': 127.0644586},
    {'lat': 37.223963, 'lng': 127.046323},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2227266, 'lng': 127.0562785},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2205418, 'lng': 127.0520894},
    {'lat': 37.2204628, 'lng': 127.0480524},
    {'lat': 37.2225781, 'lng': 127.0490834},
    {'lat': 37.223149, 'lng': 127.0514781},
    {'lat': 37.2225781, 'lng': 127.0490834},
    {'lat': 37.2281564, 'lng': 127.047699},
    {'lat': 37.2281564, 'lng': 127.047699},
    {'lat': 37.2276197, 'lng': 127.0444328},
    {'lat': 37.2276197, 'lng': 127.0444328},
    {'lat': 37.2276197, 'lng': 127.0444328},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2065761, 'lng': 127.0703133},
    {'lat': 37.2105205, 'lng': 127.1019693},
    {'lat': 37.2019527, 'lng': 127.1187553},
    {'lat': 37.2024085, 'lng': 127.1153482},
    {'lat': 37.2024085, 'lng': 127.1153482},
    {'lat': 37.2009599, 'lng': 127.0700453},
    {'lat': 37.2009599, 'lng': 127.0700453},
    {'lat': 37.2009599, 'lng': 127.0700453},
    {'lat': 37.2009599, 'lng': 127.0700453},
    {'lat': 37.2009292, 'lng': 127.0682546},
    {'lat': 37.2009292, 'lng': 127.0682546},
    {'lat': 37.2000296, 'lng': 127.0735521},
    {'lat': 37.2103366, 'lng': 127.0674752},
    {'lat': 37.2094877, 'lng': 127.0689786},
    {'lat': 37.2085245, 'lng': 127.0657488},
    {'lat': 37.2022149, 'lng': 127.0722961},
    {'lat': 37.2039524, 'lng': 127.0401863},
    {'lat': 37.2029498, 'lng': 127.0430538},
    {'lat': 37.2029498, 'lng': 127.0430538},
    {'lat': 37.2029498, 'lng': 127.0430538},
    {'lat': 37.2088297, 'lng': 127.0476117},
    {'lat': 37.2100518, 'lng': 127.0467506},
    {'lat': 37.20764, 'lng': 127.043},
    {'lat': 37.2078853, 'lng': 127.043751},
    {'lat': 37.2031489, 'lng': 127.0273275},
    {'lat': 37.2031489, 'lng': 127.0273275},
    {'lat': 37.2031489, 'lng': 127.0273275},
    {'lat': 37.20764, 'lng': 127.043},
    {'lat': 37.2067975, 'lng': 127.0434268},
    {'lat': 37.2067975, 'lng': 127.0434268},
    {'lat': 37.2106905, 'lng': 127.0408623},
    {'lat': 37.2051356, 'lng': 127.0421956},
    {'lat': 37.2051356, 'lng': 127.0421956},
    {'lat': 37.2150506, 'lng': 126.9672684},
    {'lat': 37.2015111, 'lng': 127.046632},
    {'lat': 37.2015111, 'lng': 127.046632},
    {'lat': 37.202472, 'lng': 127.0500448},
    {'lat': 37.202472, 'lng': 127.0500448},
    {'lat': 37.202472, 'lng': 127.0500448},
    {'lat': 37.2101735, 'lng': 127.073521},
    {'lat': 37.2067045999999, 'lng': 127.1051318},
    {'lat': 37.1962232, 'lng': 127.0974068},
    {'lat': 37.1892656, 'lng': 127.0727119},
    {'lat': 37.1893125, 'lng': 127.0737202},
    {'lat': 37.1893125, 'lng': 127.0737202},
    {'lat': 37.1895738, 'lng': 127.0734565},
    {'lat': 37.1874215, 'lng': 127.0764449},
    {'lat': 37.1882101, 'lng': 127.0751351},
    {'lat': 37.1874977, 'lng': 127.0746142},
    {'lat': 37.1874977, 'lng': 127.0746142},
    {'lat': 37.2143319, 'lng': 127.0460809},
    {'lat': 37.2143319, 'lng': 127.0460809},
    {'lat': 37.2143319, 'lng': 127.0460809},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2257544, 'lng': 127.0609304},
    {'lat': 37.2281082, 'lng': 127.0608959},
    {'lat': 37.2281082, 'lng': 127.0608959},
    {'lat': 37.2281082, 'lng': 127.0608959},
    {'lat': 37.2281082, 'lng': 127.0608959},
    {'lat': 37.2254064, 'lng': 127.0611223}
];
    
    
var markers = positions.map(function(position) {  // 마커를 배열 단위로 묶음
    return new kakao.maps.Marker({
        position : new kakao.maps.LatLng(position.lat, position.lng)
    });
});

clusterer.addMarkers(markers); // 새로운 마커들을 클러스터에 추가
});