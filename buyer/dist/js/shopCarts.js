$(function(){function n(){var n=0,t=0;$(".ck:checked").each(function(){n+=parseInt($(this).parent().parent().find(".num_txt").html()),t+=parseInt($(this).parent().parent().find(".cost span").html())}),$(".num_total em").html(n),$(".pay_r_moeny").html(t),$(".moeny_total").html(t)}for(var t=getCookie("shoplist"),i="",s=0;s<t.length;s++)shopinfo=t[s],i+='<div class="order_list">\n						<div class="order_info">\n							<input type="checkbox" name="" id="" value="" class="ck" />\n							<a href=""><img src="images/'+shopinfo.src+'"/></a>\n							<div class="order_name">\n								<a href="">'+shopinfo.name+'</a>\n							</div>\n						</div>\n						<div class="order_price">'+shopinfo.price+'</div>\n						<div class="order_num">\n							<div class="updateCount"><span style="display:none;">-</span></div>\n							<div class="num_txt">'+shopinfo.count+'</div>\n							<div class="updateCount"><span style="display:none;">+</span></div>\n						</div>\n						<span style="display:none" data-id='+shopinfo.id+" data-name="+shopinfo.name+"  data-price="+shopinfo.price+" data-src="+shopinfo.src+'></span>\n						<div class="cost"><span>'+shopinfo.count*shopinfo.price+'</span></div>\n						<div class="delete">\n							<a href="" class="del_btn">删除</a>\n						</div>\n					</div>';$(".list_box").html(i),$(".ck").click(function(){n()}),$("#selectAll").click(function(){$(".ck").prop("checked",$(this).prop("checked")),n()}),$(".updateCount").click(function(){var n=$(this).parent().next().data("id"),i=$(this).find("span").html(),s=$(this).parent().find(".num_txt").html();if("-"!=i||1!=s)for(var a=0;a<t.length;a++)if(n==t[a].id){"+"==i?t[a].count++:t[a].count--,setCookie("shoplist",JSON.stringify(t)),$(this).parent().find(".num_txt").html(t[a].count),$(this).parent().parent().find(".cost span").html(t[a].count*t[a].price);break}}),$(".del_btn").click(function(){var n=$(this).parent().prev().prev().data("id");if(confirm("确定要删除么？")){for(var i=0;i<t.length;i++)if(n==t[i].id){t.splice(i,1),setCookie("shoplist",JSON.stringify(t));break}$(this).parent().parent().remove()}})});