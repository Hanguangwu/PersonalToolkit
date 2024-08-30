// document.getElementById('convertButton').addEventListener('click', () => {
//     const inputText = document.getElementById('inputText').value;
//     const font = document.getElementById('fontSelect').value;
//     const fontSize = document.getElementById('fontSize').value + 'px';
//     const pageHeight = document.getElementById('pageHeight').value + 'px';

//     const outputDiv = document.getElementById('output');
//     outputDiv.style.fontFamily = font;
//     outputDiv.style.fontSize = fontSize;
//     outputDiv.style.height = pageHeight;
//     outputDiv.classList.add('vertical-text');

//     // 处理标点符号的优化
//     const optimizedText = optimizePunctuation(inputText);
//     outputDiv.textContent = optimizedText;
// });

// function optimizePunctuation(text) {
//     // 这里可以添加标点符号优化处理的代码
//     return text.replace(/，/g, '，\n')
//                .replace(/。/g, '。\n')
//                .replace(/；/g, '；\n')
//                .replace(/：/g, '：\n');
// }

// document.getElementById('exportTxtButton').addEventListener('click', () => {
//     const text = document.getElementById('output').textContent;
//     const blob = new Blob([text], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'output.txt';
//     a.click();
//     URL.revokeObjectURL(url);
// });

// document.getElementById('exportSvgButton').addEventListener('click', () => {
//     const text = document.getElementById('output').textContent;
//     const svgContent = `
//         <svg xmlns="http://www.w3.org/2000/svg" width="200" height="${document.getElementById('pageHeight').value}">
//             <text x="10" y="20" font-family="${document.getElementById('fontSelect').value}" font-size="${document.getElementById('fontSize').value}px" writing-mode="vertical-rl">
//                 ${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
//             </text>
//         </svg>`;
    
//     const blob = new Blob([svgContent], { type: 'image/svg+xml' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'output.svg';
//     a.click();
//     URL.revokeObjectURL(url);
// });


function updatePreview() {
    const inputText = document.getElementById('inputText').value;
    const font = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const pageHeight = document.getElementById('pageHeight').value + 'px';

    const outputDiv = document.getElementById('output');
    outputDiv.style.fontFamily = font;
    outputDiv.style.fontSize = fontSize;
    outputDiv.style.height = pageHeight;
    outputDiv.classList.add('vertical-text');

    // 处理标点符号的优化
    const optimizedText = optimizePunctuation(inputText);
    outputDiv.textContent = optimizedText;
}

function optimizePunctuation(text) {
    return text.replace(/，/g, '，')
               .replace(/。/g, '。')
               .replace(/；/g, '；')
               .replace(/：/g, '：')
               .replace(/！/g, '！')
               .replace(/？/g, '？')
               .replace(/“/g, '“')
               .replace(/”/g, '”');
}

// function optimizePunctuation(text) {
//     return text.replace(/，/g, '，\n')
//                .replace(/。/g, '。\n')
//                .replace(/；/g, '；\n')
//                .replace(/：/g, '：\n')
//                .replace(/！/g, '！\n')
//                .replace(/？/g, '？\n')
//                .replace(/“/g, '“\n')
//                .replace(/”/g, '”\n');
// }

// function optimizePunctuation(text) {
//     return text.replace(/，/g, '，\n')
//                .replace(/。/g, '。\n')
//                .replace(/；/g, '；\n')
//                .replace(/：/g, '：\n');
// }

// 事件监听
document.getElementById('inputText').addEventListener('input', updatePreview);
document.getElementById('fontSelect').addEventListener('change', updatePreview);
document.getElementById('fontSize').addEventListener('input', updatePreview);
document.getElementById('pageHeight').addEventListener('input', updatePreview);

document.getElementById('exportTxtButton').addEventListener('click', () => {
    const text = document.getElementById('output').textContent;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.txt';
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById('exportSvgButton').addEventListener('click', () => {
    const text = document.getElementById('output').textContent;
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="${document.getElementById('pageHeight').value}">
            <text x="10" y="20" font-family="${document.getElementById('fontSelect').value}" font-size="${document.getElementById('fontSize').value}px" writing-mode="vertical-rl">
                ${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </text>
        </svg>`;
    
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.svg';
    a.click();
    URL.revokeObjectURL(url);
});

// 初始化预览
updatePreview();





