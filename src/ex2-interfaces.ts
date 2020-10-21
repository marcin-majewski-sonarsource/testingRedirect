export interface Drawable {
	id: number;
	otherField: string;
	name?: string;
	draw: (target: Node) => void;
}

class Rect implements Drawable {
	id: number;
	draw(target: Node) {}
}

const thing: Drawable = {
	id: 0,
	draw: function (target: Node) { }
};
