// import pinyin from "pinyin";

// Wait for the OpenCC and Pinyin scripts to load
document.addEventListener('DOMContentLoaded', () => {
    const converterToTraditional = OpenCC.Converter({ from: 'cn', to: 'tw' });
    const converterToSimplified = OpenCC.Converter({ from: 'tw', to: 'cn' });

    document.getElementById('toTraditional').addEventListener('click', () => {
        const inputText = document.getElementById('inputText').value;
        const convertedText = converterToTraditional(inputText);
        document.getElementById('outputText').value = convertedText;
    });

    document.getElementById('toSimplified').addEventListener('click', () => {
        const inputText = document.getElementById('inputText').value;
        const convertedText = converterToSimplified(inputText);
        document.getElementById('outputText').value = convertedText;
    });

    // document.getElementById('toPinyin').addEventListener('click', () => {
    //     const inputText = document.getElementById('inputText').value;
    //     // const pinyinText = pinyin(inputText, { style: pinyin.STYLE_NORMAL }).join(' ');
    //     const pinyinText = pinyin(inputText);
    //     document.getElementById('outputText').value = pinyinText;
    // });

    document.getElementById('copyText').addEventListener('click', () => {
        const outputText = document.getElementById('outputText');
        outputText.select();
        document.execCommand('copy');
        alert('文本已复制');
    });

    document.getElementById('clearText').addEventListener('click', () => {
        document.getElementById('inputText').value = '';
        document.getElementById('outputText').value = '';
    });

    document.getElementById('exportTXT').addEventListener('click', () => {
        const outputText = document.getElementById('outputText').value;
        const blob = new Blob([outputText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'output.txt';
        link.click();
    });
});