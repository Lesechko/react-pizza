import React, {useState} from 'react';

function PizzaModify({type: {size, basis}}) {
	const defaultSize = [26, 30, 40];
	const defaultBasic = ['тонкое', 'традиционное'];

	const [activeSize, setActiveSize] = useState(size[0]);
	const [activeBasis, setActiveBasis] = useState(basis[0]);

	const onSizeChange = (s) => {
		if (size.includes(s)) {
			setActiveSize(s);
		}
	};
	const onBasisChange = (b) => {
		if (basis.includes(b)) {
			setActiveBasis(b);
		}
	};
	const getClassNameBasic = (b) => {
		return activeBasis === b ? 'active' : !basis.includes(b) ? 'disabled' : '';
	};
	const getClassNameSize = (s) => {
		return activeSize === s ? 'active' : !size.includes(s) ? 'disabled' : '';
	};

	return (
		<div className="pizza-block__selector">
			<ul>
				{defaultBasic.map((b, id) => (
					<li
						key={id}
						className={getClassNameBasic(b)}
						onClick={() => onBasisChange(b)}
					>
						{b}
					</li>
				))}
			</ul>
			<ul>
				{defaultSize.map((s, id) => (
					<li
						key={id}
						className={getClassNameSize(s)}
						onClick={() => onSizeChange(s)}
					>
						{s + ' см'}
					</li>
				))}
			</ul>
		</div>
	);
}

export default PizzaModify;
