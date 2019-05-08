var key_value = ""; //key 값은 http://www.kobis.or.kr/kobisopenapi 에서 가입할것
var url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key="+key_value+"&targetDt=20190507";

        $(function() {
            $.ajax({
                type:"GET",
                url: url,
                dataType : "json",
                success : jsonget,

            });

            function jsonget(data) {
                var type = data.boxOfficeResult.dailyBoxOfficeList;
                $.each(type,function(idx,item){
                document.write("<p>" + item.rank + " : " + item.movieNm + "</p>");
                });
            }
        });
