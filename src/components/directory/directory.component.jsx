import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "Hats",
          imageUrl: "https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
          id: 2,
          title: "Jackets",
          imageUrl: "https://images.unsplash.com/photo-1580051215498-3e2b858651b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
        },
        {
          id: 3,
          title: "Sneakers",
          imageUrl: "https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
        },
        {
          id: 4,
          title: "Men",
          imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          size: "large"
        },
        {
          id: 5,
          title: "Women",
          imageUrl: "https://images.unsplash.com/photo-1520404209763-4699fa7f15f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
          size: "large"
        }
      ]
    }
  }

  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({id, title, imageUrl, size}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          ))
        }
      </div>
    )
  }
}

export default Directory;