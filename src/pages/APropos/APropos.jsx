import React from 'react';
import AproposData from './AproposData.json';
import Collapse from '../../components/Collapse/Collapse';
import BannerAp from './Bannerap';
import "./APropos.scss";

function Apropos() {
  return (
    <div className="colcontainer">
      <BannerAp />
      {AproposData.map((rule, id) => (
        
        	<Collapse
	          key={id}
	          Title={rule.Title}
	          Text={rule.Text}
	          Style="about-style"
	        />
        
      ))}
    </div>
  );
}

export default Apropos;
