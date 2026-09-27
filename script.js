const products=[
["Dell Latitude 5490","laptop","Business Laptop • 8GB RAM • 256GB SSD","₹22,000","https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=800&q=80"],
["HP EliteBook Series","laptop","Refurbished • 8GB RAM • 256GB SSD","₹24,000","https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"],
["Lenovo ThinkPad","laptop","Business Laptop • 8GB RAM • 256GB SSD","₹23,500","https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=800&q=80"],
["Acer Aspire","laptop","Refurbished • 8GB RAM • 256GB SSD","₹22,500","https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"],
["Refurbished Desktop PC","desktop","Core i5 • 8GB RAM • 256GB SSD","₹18,500","https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"],
["Business Tower PC","desktop","Office PC • SSD • Ready to use","₹16,500","https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80"],
["Wireless Keyboard & Mouse","accessory","Comfortable combo for home & office","₹899","https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"],
["Laptop Backpack","accessory","Padded laptop compartment • Daily use","₹699","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"],
["USB-C Hub","accessory","Multi-port USB-C adapter","₹1,299","https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"],
["27-inch Monitor","accessory","Full HD display • Office & home","₹8,999","https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"],
["8GB DDR4 RAM","component","Laptop/Desktop memory upgrade","₹1,799","https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80"],
["256GB SSD","component","Fast SATA SSD • Upgrade storage","₹1,799","https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"],
["1TB HDD","component","Desktop/Laptop storage","₹3,299","https://images.unsplash.com/photo-1531492746076-161ca9b7a33b?auto=format&fit=crop&w=800&q=80"],
["Laptop Charger","accessory","Multiple brands & compatible models","₹799","https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"],
["USB Webcam","accessory","HD webcam for meetings & classes","₹999","https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80"],
["HDMI Cable","accessory","HDMI cable for monitor/TV","₹299","https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"]
];
let active="all";
function render(){
 const q=document.getElementById("search").value.toLowerCase();
 const list=products.filter(p=>(active==="all"||p[1]===active)&&p.join(" ").toLowerCase().includes(q));
 document.getElementById("productGrid").innerHTML=list.map(p=>`<article class="card"><img src="${p[4]}" alt="${p[0]}" loading="lazy"><div class="card-body"><span class="tag">${p[1]}</span><h3>${p[0]}</h3><div class="spec">${p[2]}</div><div class="price">${p[3]} <small>onwards</small></div><a class="btn" style="width:100%;text-align:center" href="https://wa.me/918799762587?text=${encodeURIComponent("Hello Lapstop, I am interested in "+p[0])}">Enquire Now</a></div></article>`).join("")||"<p>No products found. Please call 8799762587 for current stock.</p>";
}
function setFilter(f,el){active=f;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));el.classList.add("active");render()}
function filterProducts(){render()} render();
