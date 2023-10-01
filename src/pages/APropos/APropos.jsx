
import React from 'react';
import AproposData from "./AproposData.json";
import Collapse from '../../components/Collapse/Collapse';


 function Apropos() {
	return (
		<>
			
			{AproposData.map((rule, id) => (
				<Collapse
					key={id}
					Title={rule.Title}
					Text={rule.Text}
					Style="about-style"
				/>
			))}
		</>
	);
}


export default Apropos;
