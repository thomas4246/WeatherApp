function sstore() {
  if (typeof Storage !== 'undefined') {
    var thm;

    if (document.getElementsByName('theme')[1].checked) {
      thm = 'dark';
    } else {
      thm = 'light';
    }

    localStorage.removeItem('theme');
    localStorage.setItem('theme', thm);

    localStorage.removeItem('unit');
    localStorage.setItem('unit', unit);

    console.log(unit);
  }
}

var root = document.querySelector(':root');

function themer() {
  if (document.getElementsByName('theme')[1].checked) {
    //dark
    root.style.setProperty('--body', '#3d3d3dd1');
    root.style.setProperty('--widget', '#06b87c');
    root.style.setProperty('--highlight', '#f3f3f3');
    root.style.setProperty('--theme', '#00acc1');
    root.style.setProperty('--selected', '#2b2b2b');
    root.style.setProperty('--base', '#3d3d3d');
    root.style.setProperty('--text', '#ececec');
    root.style.setProperty('--listtext', '#bfbfbf');
    root.style.setProperty('--elevation', '#ffffff14');
    Chart.defaults.global.defaultFontColor = '#ececec';
  } else {
    //light - default
    root.style.setProperty('--body', '#efefef');
    root.style.setProperty('--widget', '#52a3db');
    root.style.setProperty('--highlight', '#424242');
    root.style.setProperty('--theme', '#4fa584');
    root.style.setProperty('--selected', '#ededeb');
    root.style.setProperty('--base', '#fafafa');
    root.style.setProperty('--text', '#585858');
    root.style.setProperty('--listtext', '#757575');
    root.style.setProperty('--elevation', '#ededeb66');
    Chart.defaults.global.defaultFontColor = '#585858';
  }
  sstore();
}
