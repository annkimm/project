function selector(el){

  let arr=el.replace(/ /gi,"").split(",");
  if(arr.length<=1){

    let str=el.slice(1);

    if(el[0] === "#"){
      return document.getElementById(str);
    }else if(el[0] === "."){
      return document.getElementsByClassName(str);
    }else{
      return
    }
  }else{

    let nArr=arr.slice();
    let obj={};
    let idArr=[];
    let classArr=[];
    nArr.reduce(function(acc,cur){

      if(acc.indexOf(cur)<0){
        acc.push(cur)
      }

      return acc;

    },[]).filter(function(cur){

      if(cur[0] === "#"){
        idArr.push(cur.slice(1))
        //obj["id"]=idArr;
        return document.getElementById(cur.slice(1));
      }else if(cur[0] === "."){

        classArr.push(cur.slice(1))
        return document.getElementsByClassName(cur.slice(1));
        //obj["class"]=classArr;
      }

      //return obj;
    })

  };
}



selector("#aa")
selector("#aa, #aa");
selector("#aa, #bb");
selector(".aa");
selector(".bb,#a");
selector(".aa,aa");

/*

테스트 케이스

1. #aa
2. #aa, #aa 이때는중복이므로 하나만 리턴
3. #aa, #bb
4. .aa
5. .bb, #a
6. .aa, aa

*/

/*
function selector(elName1,elName2,childrenTagName){
  let str=elName1.slice();
  let strFirst=elName1[0];

  if(elName2 === undefined && childrenTagName === undefined){

      let onlyTag=str.slice(1);
      if(strFirst === "#"){
        return document.getElementById(onlyTag);
      }else if(strFirst === "."){
        return document.getElementsByclass(onlyTag)[0];
      }
  }else if(elName1 !== undefined && elName2 !== undefined ){
    if(childrenTagName === undefined){

    }

  }


}
*/
