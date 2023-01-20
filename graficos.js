function Mypiechart ()
            {
            var tabela = new google.visualization.DataTable();
            tabela.addColumn('string','Categorias');
            tabela.addColumn('number','Valores');
            tabela.addRows
            ([
                    ['Educação',2000],
                    ['Transporte',500],
                    ['Lazer',230],
                    ['Saúde',50],
                    ['Cartão de crédito',900],
                    ['Alimentação',260]
            ]);  

            var options  = {
                'title':'Gastos',
                'height':300,
                'width': 900,
                is3D: true,
                legend: 'labeled',
                pieSliceText:'value',
                slices:
                {
                0:{color:'red'},
                1:{color:'silver'},
                2:{color:'lightgrey'},
                3:{color:'grey'},
                4:{offset:.4, color:'red'},
                5:{color:'grey'},
                }
            };

            var grafico = new google.visualization.PieChart(document.getElementById('piechart'));
            grafico.draw(tabela,options);

            tabela = new google.visualization.DataTable();
            tabela.addColumn('string','Mês')
            tabela.addColumn('number','Gastos')
            tabela.addRows(
            [
                ['jan',800],
                ['fev',400],
                ['mar',1100],
                ['abr',400],
                ['mai',500],
                ['jun',750],
                ['jul',1500],
                ['ago',650],
                ['set',850],
                ['out',400],
                ['nov',1000],
                ['dez',720]
            ]);

            var options = {
                title:'Gastos por mês',
                 width: 650,
                height: 300, 
                vAxis:{format:'currency', gridlines:{count:5,color:'transparent'}},
                curveType:'function',
                legend:'none',
            }

            var grafico  = new google.visualization.LineChart(document.getElementById('linegraphic'));
            grafico.draw(tabela,options);

            tabela = google.visualization.arrayToDataTable(

                [
                    ['Mês','Entrada','Saída'],
                    ['jan',2500,1000],
                    ['fev',1000,500],
                    ['mar',3000,1300],
                    ['abr',1500,1700],
                    ['mai',5000,2250],
                    ['jun',3567,3000],
                    ['jul',3452,1468],
                    ['ago',1833,5250],
                    ['set',1800,1000],
                    ['out',1800,1000],
                    ['nov',3569,1500],
                    ['dez',3000,1740] 
                    ]
            );

            var options = {
                title:'Entrada e saída da conta',
                width:800,
                height:400,
                vAxis: {format:'currency',title:'Valores',gridlines:{color:'transparent'}},
                hAxis:{title:'Mês',}
            }

            var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
            grafico.draw(tabela,options);
            

            //Extra Columns

            
            var dadosJson = $.ajax(
                {
                    url:'https://gist.githubusercontent.com/Mark1062/6326ce287836d9642ba80d65f8f733f2/raw/89ce31b27d59e78451534815e88ba336af5113ef/dados.jason',
                    dataType: 'Json',
                    async: false

            
            
                }
                
                ).responseText

            var tabela = new google.visualization.DataTable(dadosJson);
           
            tabela.sort([{column:1,desc:true}]);
            

            var options = {
                title:'Tipo de gastos',
                height:400,
                width:800,
                vAxis:{format:'currency',gridlines:{color:'transparent'}},
                legend:'none',
                hAxis:{gridlines:{color:'transparent'},format:'currency',textPosition:'none'},
                annotations:{alwaysOutside:true},
            }

            var grafico = new google.visualization.BarChart(
                document.getElementById('ExtraColumns'));
                grafico.draw(tabela,options);

        //grafico de barras com arquivo Json
                var dadosJson = $.ajax({url:'dados.json',dataType:'json',async:false}).responseText;
                var tabela = new google.visualization.DataTable(dadosJson);
                tabela.sort([{column:1,desc:true}]);

                var options = {title:'Usuarios e poupanças', width:800,height:400,legend:'none',hAxis:{gridlines:{color:'transparent'},textPosition:'none'},annotations:{alwaysOutside:true},
                
                }
                var grafico = new google.visualization.BarChart(document.getElementById('graficosBarrasJson'));
                grafico.draw(tabela,options);




            }