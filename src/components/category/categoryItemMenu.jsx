import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryItemMenu extends Component {
    render() {
        let id = !this.props.category ? "" : this.props.category.id;
        return (
            <div
                className="drawer__header-overlay-menu"
                style={{
                    display: this.props.display ? "flex" : "none",
                    top: this.props.position.top,
                    left: this.props.position.left
                }}
            >
                <div
                    className="drawer__header-overlay-menu-item"
                    onClick={() =>
                        this.props.deleteCategory(this.props.category)
                    }
                >
                    Удалить
                </div>
                <Link
                    to={"/change-category/" + id}
                    className="drawer__header-overlay-menu-item"
                >
                    Изменить
                </Link>
            </div>
        );
    }
}

export default CategoryItemMenu;
