/*
 * @Author       : HQ3xg
 * @Date         : 2020-11-04 20:19:27
 * @Description  : ---
 * @symbol_custom_string_obkoro1: 明天也是美好的一天 (ﾟДﾟ)ﾊｧ?
 */
/*
 * @Author       : HQ3xg
 * @Date         : 2020-11-04 20:34:13
 * @Description  : ---
 * @symbol_custom_string_obkoro1: 明天也是美好的一天 (ﾟДﾟ)ﾊｧ?
 */
window.onload = function(){
  let sufaceTables = document.querySelectorAll('.sufaceTables');

  let marr = [];
  for (let i=0; i<17; i++) {
    if (i == 10) continue;
    marr.push( String.fromCharCode(`0x${i+30}`) );
  }

  for (let tbNum = 0, len = sufaceTables.length; tbNum < len; tbNum++){
    for(let i = 0; i < 16; i++) {
      sufaceTables[tbNum].appendChild(document.createElement('tr'));
    }
  }
  for (let tbNum = 0, len = sufaceTables.length; tbNum < len; tbNum++){
    for(let i = 0; i < 16; i++) {
      for(let j = 0; j< 16; j++) {
        sufaceTables[tbNum].getElementsByTagName('tr')[i].appendChild(document.createElement('td'));
      }
    }
  }
  let i = 0;
  let j = 0;
  mod_surface(sufaceTables[4],'rgb000toF0F');
  mod_surface(sufaceTables[0],'rgb000to0FF');
  mod_surface(sufaceTables[3],'rgb000toFF0');
  mod_surface(sufaceTables[1],'rgbF00toFFF');
  mod_surface(sufaceTables[5],'rgb0F0toFFF');
  mod_surface(sufaceTables[2],'rgb00FtoFFF');
  
  function mod_surface(table, descriptionDiagonal) {
    let aimCellStyle;
    let c;
    let r;
    for(let row = 0; row < 16; row++) {
      for(let col = 0; col< 16; col++) {
        aimCellStyle = table.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style;
        c = marr[col]; // 0 to F
        r = marr[row]

        switch(descriptionDiagonal) {
          case 'rgb000toF0F':
            aimCellStyle.backgroundColor = `#${r}0${c}`;
            break;
          case 'rgb000to0FF':
            aimCellStyle.backgroundColor = `#0${c}${r}`;
            break;
          case 'rgb000toFF0':
            aimCellStyle.backgroundColor = `#${c}${r}0`;
            break;
          case 'rgbF00toFFF':
            aimCellStyle.backgroundColor = `#F${r}${c}`;
            break;
          case 'rgb0F0toFFF':
            aimCellStyle.backgroundColor = `#${c}F${r}`;
            break;
          case 'rgb00FtoFFF':
            aimCellStyle.backgroundColor = `#${r}${c}F`;
            break;
        }
      }
    }
  }

  // 边框有无 按钮
  let btn_TableBorder = document.querySelector('#nck');
  let tbs = document.querySelectorAll('.sufaceTables');

  if(btn_TableBorder.checked) tbs.forEach( table=> {table.classList.add('border-collapse');})

  btn_TableBorder.onclick = () =>{
    tbs.forEach( table=> {
      btn_TableBorder.checked 
        ? table.classList.add('border-collapse')
        : table.classList.remove('border-collapse');
    })
  }
}
