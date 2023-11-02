$(document).ready(function() {
    setTimeout(function() {

        var currentDate = new Date();

        // 月、日、曜日、年表示部分の要素を取得
        var month = $("#hmmonth");
        var date = $("#hmdate");
        var day = $("#hmday");
        var year = $("#hmyear");


        // 今日の日付を表示する関数
        function displayToday() {
            const youbi = ["日", "月", "火", "水", "木", "金", "土"];
            const myMonth = currentDate.getMonth() + 1;
            const myDate = currentDate.getDate();
            const myDay = youbi[currentDate.getDay()];
            const myYear = currentDate.getFullYear();


            month.text(myMonth + "月");
            date.text(myDate);
            day.text(myDay + "曜日");
            year.text(myYear+"年"); 

            // 土曜と日曜は日付の文字色変更
            if (myDay === "日") {
                $("#hmday").css("color", "red");
            } else if (myDay === "土") {
                $("#hmday").css("color", "blue");
            } else{
                $("#hmday").css("color", "black");
            }
        }

        // ページ読み込み時に今日の日付を表示
        displayToday();

        // "left" ボタンをクリックしたときの処理
        $("#left").on("click", function() {
            currentDate.setDate(currentDate.getDate() - 1);
            displayToday();
        });

        // "right" ボタンをクリックしたときの処理
        $("#right").on("click", function() {
            currentDate.setDate(currentDate.getDate() + 1);
            displayToday();
        });
        // "today" ボタンをクリックしたときの処理
        $("#today").on("click", function() {
            currentDate = new Date(); 
            displayToday();
        });

    }, 4500); // 4.5秒後に実行
});
