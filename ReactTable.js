var loadTable = function(tableData, element, tableClass, config) {
/*
    React.render(<FileLinkSingle
      Content={"Bla: Abracon_ABM7.pdf"}
      ImagePath={"./Icons"}
      FilePath={"./Datasheets"} />, document.getElementById("Test"));

    React.render(<FileLink
      ImagePath={"./Icons"}
      Content={"LTE: TE_1650952.pdf, next: ENG_CD_1734035_E1_C_1734035.pdf"}
      FilePath={"./Datasheets"}
      ColNumber={"Col0"} />, document.getElementById("Test2"));
*/
  var FilterTable = React.createClass({
      render: function () {
        return(
          <Table TableData={tableData} TableConfig={PartPoolConfig}
            TableClass={tableClass} />
        );
      }
  });

  React.render(<FilterTable />, element);

};

//----------- PartPoolTable ------------------------------


var Table = React.createClass({
    render: function() {
        var rows = [];
        var head = [];
        var TableData = this.props.TableData;
        var TableConfig = this.props.TableConfig;
        var TableId = null;
        var TableClass = this.props.TableClass;

        TableConfig.forEach(function(config) {
            head.push(<TableHeadCell Content={config.JsonName} />);
        });

        TableData.forEach(function(tableData) {
          if(tableData.Beschreibung != null) {
            rows.push(<TableRow key={Math.random()} Content={tableData} TableConfig={TableConfig} />);
          }
        });
        /*
        for(var i=0; i<150; i++)
        {
          rows.push(<TableRow key={Math.random()} Content={TableData[i]} TableConfig={TableConfig} />);
        }
        */
        return(
            <table className={TableClass}>
                <thead>
                    <tr>{head}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
        sortTable();
    }
});

var TableRow = React.createClass({
    render: function() {
      var ImagePath = "./Icons";
      var FilePath = "./Datasheets";
      var cells = [];
      var TableConfig = this.props.TableConfig;
      var Row = this.props.Content;

      for (var i = 0; i<TableConfig.length; i++) {
        var _content = Row[TableConfig[i].JsonName]
        //console.log("i:" + i + " - " + TableConfig[i].JsonName + " :  " + Row[TableConfig[i].JsonName]);

        switch(TableConfig[i].ColType)
        {
          case "FileLink":
            //console.log("Content: " + _content)
            var _temp = <FileLink key={Math.random()} Content={_content}
              ImagePath={ImagePath}
              FilePath={FilePath} />;
               cells.push(<TableCell key={Math.random()} Content={_temp} />);
              break;
          default:
             cells.push(<TableCell key={Math.random()} Content={_content} />);
              break;
        }
      }
      return(
          <tr>{cells}</tr>
      );
    }
});

var TableCell = React.createClass({
    render: function() {
        return(
            <td>{this.props.Content}</td>
        );
    }
});

var TableHeadCell = React.createClass({
    render: function() {
        return(
            <th>{this.props.Content}</th>
        );
    }
});

//--------------------------------------------------------
