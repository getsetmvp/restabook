import React from "react";
import "./ChefSectionContainer.css";

// components
import SectionHeader from "../../components/SectionHeader/SectionHeader";

// constants
import { ChefSection } from "../../constants/section.constants";
import { Chefs } from "../../constants/chef.constants";

const ChefSectionContainer = () => {
  return (
    <div id="chef">
      <div className="wrapper">
        <SectionHeader
          text={ChefSection.Text}
          title={ChefSection.Title}
          position={ChefSection.Position}
          variant={ChefSection.Variant}
        />
        <div className="row-md">
          {Chefs.map((Chef) => (
            <div className="col-md-4" key={Chef.name}>
              <div className="chef-card">
                <div className="chef-image">
                  <img
                    src={require(`../../assets/images/chefs${Chef.img}`)}
                    alt=""
                  />
                </div>
                <div className="chef-info">
                  <div className="chef-name">{Chef.name}</div>
                  <div className="chef-title">{Chef.title}</div>
                  <div className="chef-desc">{Chef.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefSectionContainer;
