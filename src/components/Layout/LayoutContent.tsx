import { useLayoutEffect, useState } from "react";
import {
	Outlet,
	useLocation,
	useParams,
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { layoutStyles } from "./styles";

const { Content } = layoutStyles;

interface LayoutContentProps {
	auth?: boolean;
}
export const LayoutContent = () => {
	const [noTransition, setNoTransition] = useState<boolean | string>(false);
	const params = useParams();
	const { key, hash, pathname } = useLocation();
	const [prevPath, setPrevPath] = useState(pathname);

	useLayoutEffect(() => {
		const lastItem = pathname.split("/").at(-1);
		let transition =
			lastItem === "tickets" || "some";
		setNoTransition(hash.length > 0 || transition || params.id !== undefined);
		setPrevPath(pathname);
	}, [params]);


	return (
		<Content>
			<SwitchTransition>
				<CSSTransition
					key={key}
					classNames={noTransition ? "" : "fadeIn"}
					timeout={noTransition ? 0 : 250}>
					<Outlet />
				</CSSTransition>
			</SwitchTransition>
		</Content>
	);
};
