$(document).ready(function () {
    // ページ読み込み後、4.5秒後にコードを実行する
    setTimeout(function () {
        $('.left').css('display', 'block');
        $('.right').css('display', 'block');
        $('#dataForm').submit(function (event) {
            event.preventDefault();

            const dataInput = $('#data');
            const savedDataDiv = $('#savedData');
            const data = dataInput.val();

            if (data) {
                let existingData = localStorage.getItem('savedData');

                if (existingData) {
                    existingData += '<br>' + data; 
                } else {
                    existingData = data;
                }

                localStorage.setItem('savedData', existingData);

                // 保存したデータを表示
                savedDataDiv.html('保存されたメモ:<br>' + existingData);

                // フォームの入力値をクリア
                dataInput.val('');
            }
        });

        $('#deleteDataButton').click(function () {
            // ローカルストレージからデータを削除
            localStorage.removeItem('savedData');

            // 保存されたデータを表示を空にする
            const savedDataDiv = $('#savedData');
            savedDataDiv.text('保存されたメモ: ');

            // フォームの入力値をクリア
            $('#data').val('');
        });

        // ページ読み込み時に保存されたデータを表示
        const savedDataDiv = $('#savedData');
        const savedData = localStorage.getItem('savedData');

        if (savedData) {
            // 保存されたデータを表示
            savedDataDiv.html('保存されたメモ:<br>' + savedData);
        }
    }, 4500);
});
