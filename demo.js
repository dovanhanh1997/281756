let Product = function (cost,name) {
    this.name = name;
    this.cost = cost;
    this.getName = function () {
        return this.name;
    };

    this.getCost = function () {
        return this.cost
    };

    this.setName = function (newName) {
        this.name = newName;
    }

};

let App = function () {
    this.product = [];

    this.disPlay = function () {
        document.getElementById("total-product").innerHTML = this.product.length + "";
        let html = '';

        if (this.product.length > 0) {
            for (let i = 0; i < this.product.length; i++) {
                html += "<tr>";
                html += "<td>" + this.product[i].getName() + "</td>";
                html += "<td>" + this.product[i].getCost() + "</td>";
                html += "<td><button onclick='app.delte(" + i + ")'>Delte</button></td>";
                html += "</tr>"
            }
            document.getElementById("list-product").innerHTML = html;
        } else {
            html += "Không có sản phẩm";
            document.getElementById("list-product").innerHTML = html;
        }
    };

    this.add = function (cost,name) {
        let product = new Product(cost,name);
        this.product.push(product);
        this.disPlay();
    };

    this.delte = function (index) {
        this.product.splice(index, 1);
        this.disPlay();
    };

    this.update = function (index) {
        let name = prompt("Thay đổi tên sản phẩm");
        this.product[index].setName(name);
        this.product[index].getName();
        this.disPlay();
    }
};

let app = new App();
app.disPlay();
