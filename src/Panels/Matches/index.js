import React from 'react';
import {Cell, List, Group, PanelHeader, Panel} from '@vkontakte/vkui';

import MatchItem from '../../Components/Match';

import {withAppContext} from '../../context/AppContext';

const Matches = ({id, go, appContext: {state, setActiveMatch}}) => {
  const {matches, rivals} = state;
  const upcomingMatches = matches.filter(match => !match.score.length);
  const endedMatches = matches.filter(match => match.score.length);
  const viewMatchInfo = (event, activeMatch) => {
    setActiveMatch(activeMatch);
    go(event);
  };
  return (
    <Panel id={id}>
      <PanelHeader>
        Матчи
      </PanelHeader>
      {
        !!upcomingMatches.length &&
        <Group title="Предстоящие">
          <List>
            {
              upcomingMatches
                .map(match =>
                  <Cell
                    key={match.id}
                    size="l"
                  >
                    <MatchItem
                      rival={rivals.find(rival => rival.id === match.rivalId)}
                      beginTime={match.startDateTime}
                      place={match.place}
                      buyTickets={match.buyTicketsUrl || 'https://tickets.fc-zenit.ru/#basketball'}
                    />
                  </Cell>
                )
            }
          </List>
        </Group>
      }
      {
        !!endedMatches.length &&
        <Group title="Завершенные">
          <List>
            {
              endedMatches
                .map(match =>
                  <Cell
                    key={match.id}
                    size="l"
                    expandable
                    data-to='match-view'
                    onClick={e => viewMatchInfo(e, match)}
                  >
                    <MatchItem
                      rival={rivals.find(rival => rival.id === match.rivalId)}
                      beginTime={match.startDateTime}
                      place={match.place}
                      game={match.score}
                    />
                  </Cell>
                )
            }
          </List>
        </Group>
      }
    </Panel>
  );
};

export default withAppContext(Matches);
