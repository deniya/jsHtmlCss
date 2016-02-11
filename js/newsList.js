'use strict';


var arTitle = new Array("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "1111111123333333333333","sdoflhiosdf");
var arTheme = new Array('Lorem ipsum dolor sit amet, consectetur adipisicing', 'sdsjh oisdoi ijseoi ijsijd');
var arAuthor = new Array('Lorem ipsum dolor', 'hfdss uhsdoufhds ohsdfuhdos');
var arContent = new Array("<strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat voluptate ducimus at saepe ratione in, unde deserunt totam quia corporis nostrum sint suscipit eum tempora harum veniam iusto esse, temporibus exercitationem! Doloremque quos eaque vero laborum inventore nostrum quis distinctio delectus ipsa dolores earum, tempore illum beatae, porro sunt. Aliquid illum nisi veniam, iure possimus ab, explicabo fuga alias, at voluptas recusandae aperiam magnam earum commodi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint architecto voluptas minima voluptatibus eum, quibusdam iste cumque explicabo illum, quae. Aspernatur possimus, amet ad illo consequatur explicabo praesentium sunt, tenetur reprehenderit perferendis nobis nam, nemo incidunt dolorum quis tempora adipisci, iste temporibus neque libero ducimus vel officiis! Quia perspiciatis molestiae voluptas velit aliquid quasi expedita. Qui ex numquam ipsam dolor dolores cum, nostrum tenetur hic cupiditate excepturi neque quisquam id commodi distinctio! Accusantium hic quo minus nobis, adipisci quaerat quas itaque. Vel, beatae, illum. Molestias, rerum explicabo enim fugit quibusdam.</strong>",  'dslji esoijfseoij sei josef ijose');
var arDate = new Array('324.388.693', '33.068.096');


var text=document.getElementById("text");

var strTable = "<table id='strTable'>";

for (var i =0; i < arTitle.length; i++){
    strTable+= "<tr>";
    strTable+= "<th>Title</th>";
    strTable+= "<td>"+arTitle[i]+"</td>";
    strTable+= "<th>Theme</th>";
    strTable+= "<td>"+arTheme[i]+"</td>";
    strTable+= "<th>Date</th>";
    strTable+= "<td>"+arDate[i]+"</td>";
    strTable+= "<th>Author</th>";
    strTable+= "<td>"+arAuthor[i]+"</td>";
    strTable+= "</tr>";
    strTable+= "<tr class='contentFull'>";
    strTable+= "<td class='contentCSS' colspan='4'>"+arContent[i]+"</td>";
    strTable+= "</tr>";
}
strTable+= "</table>";

text.innerHTML=strTable;
