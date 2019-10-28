import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import List from '@vkontakte/vkui/dist/components/List/List';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';

const Index = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Профиль</PanelHeader>
		{
			fetchedUser &&
			<Group title='Ваши данные'>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar size={72} src={fetchedUser.photo_200}/> : null}
					size='l'
					description='300 баллов'
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>
		}
		<Group>
			<List>
				<Cell expandable before={<Icon24Settings />}>Помощь</Cell>
				<Cell expandable before={<Icon24Help />}>О пиложении</Cell>
			</List>
		</Group>
	</Panel>
);

Index.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Index;