
var FileLink = React.createClass({
  render: function() {
    var ImagePath = this.props.ImagePath;
    var Content = this.props.Content;
    var FilePath = this.props.FilePath;
    var attributes = [];
    var Key = this.props.ColNumber;

    var elements = [];
    if(Content != null) {
      elements = Content.split(",");
    }

    if(elements.length > 0) {
      elements.forEach(function(element) {
        attributes.push(<FileLinkSingle Content={element}
        ImagePath={ImagePath} FilePath={FilePath} /> );
      });
    };

    return(
      <div>
        {attributes}
        </div>
    );
  }
});

var FileLinkSingle = React.createClass({
  render: function() {
    var Content = this.props.Content;
    var FilePath = this.props.FilePath;
    var ImagePath = this.props.ImagePath;
    var Key = this.props.Key;
    var imageSource = null;
    var imageClass = null;
    var alt = null;
    var FileName = null;
    var Description = null;

    var x = Content.split(":");

    if(x.length == 1) {
      FileName = x[0];
    }
    else if(x.length == 2) {
      Description = x[0];
      FileName = x[1];
    }

    var tempArray = FileName.split(".");
    var ending = tempArray[tempArray.length - 1].trim();

    switch(ending.toLowerCase())
    {
      case "pdf":
          imageSource = ImagePath + "/" + "pdf-Icon.png";
          imageClass = "pdfimg";
          alt = "pdf";
          break;
      default:
          break;
    }

    FilePath = FilePath.trim()
    FilePath += "/" + FileName.trim();
    return(
        <a  target="_blank" href={FilePath}>
          <img className={imageClass} alt={alt} src={imageSource} />
        </a>
    );
  }
});
