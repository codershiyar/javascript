// Coder Shiyar   -   https://youtube.com/codershiyar
// -----------------------------------------------------------------------------
// document.images                    لتحديد عناصر الصور المتواجدة في الصفحة
// document.embeds              لتحديد عناصر من نوع امبد المتواجدة في الصفحة
// document.links                      لتحديد عناصر روابط في المتواجدة الصفحة    
// document.forms                       لتحديد عناصر فورم المتواجدة في الصفحة
// length                                    لمعرفة عدد العناصر من نوع المحدد 
// -----------------------------------------------------------------------------

for(var items in document.images){
document.images[items].src = "logo.png";
document.images[items].width = "200";
}
console.log(document.forms.length);