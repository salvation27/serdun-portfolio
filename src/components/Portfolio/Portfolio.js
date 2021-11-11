import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import { TitleBlock } from "../../globalStyled";
import dataMainPage from "../../data/dataMainPage.json";
import ProjectItem from "../Home/ProjectItem";
import TagButton from "./TagButton";
import portfolioStyle from "./Portfolio.module.css";

const dataProjects = dataMainPage.Projects.Progects;

export default function Portfolio() {
  const [tag, setTeg] = useState("all");
  const [filteredCard, setFilteredCard] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredCard(dataProjects)
      : setFilteredCard(dataProjects.filter((item) => item.tag_filter === tag));
  }, [tag]);

  return (
    <section id="best_progects" className="best_progects">
      <Wrapper>
        <div className="col">
          <div className="best_progects_wrap">
            <TitleBlock>All Projects</TitleBlock>
          </div>
          <div className="tag_button_wrap">
            <TagButton
              name="all"
              handleSetTag={setTeg}
              tagActive={tag === "all" ? true : false}
            />
            <TagButton
              name="shop"
              handleSetTag={setTeg}
              tagActive={tag === "shop" ? true : false}
            />
            <TagButton
              name="lending"
              handleSetTag={setTeg}
              tagActive={tag === "lending" ? true : false}
            />
            <TagButton
              name="catalog"
              handleSetTag={setTeg}
              tagActive={tag === "catalog" ? true : false}
            />
          </div>
          <div className={portfolioStyle.count}>
            <strong>projects on the page:</strong>
            <span> {filteredCard.length}</span>
          </div>
          <div className={portfolioStyle.count}>
            <strong>filter:</strong>
            <span> {tag}</span>
          </div>
          <div className="projects_wrap">
            {filteredCard.map((item, index) => {
              return <ProjectItem item={item} key={index} num={index + 1} />;
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
