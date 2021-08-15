import React from 'react';
import {FlatList} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Gap, TextSmall} from '../../../styledcomponent';

export default function MainContent({item}) {

  return (
    <>
      <Gap height={24} />
      <Gap style={{paddingHorizontal: 0}}>
        <Gap style={{flexDirection: 'row'}}>
          <Gap width={16} />
          <TextSmall weight={600} size={14}>
            {item}
          </TextSmall>
        </Gap>
        <Gap height={16} />

        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={({item}) => <RenderMemo item={item} />}
          keyExtractor={res => res}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <Gap width={16} />
            </>
          )}
          ListFooterComponent={() => (
            <>
              <Gap width={16} />
            </>
          )}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={1}
          
          updateCellsBatchingPeriod={100}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index,
            offset: 100 * index,
            index,
          })}
        />
      </Gap>
    </>
  );
}
const RenderItem = ({item}) => {

  return (
    <Gap style={{marginHorizontal: 4}}>
      <SkeletonPlaceholder backgroundColor={'#9FE0DC'}>
        <SkeletonPlaceholder.Item width={168} height={100} borderRadius={10} />
      </SkeletonPlaceholder>
    </Gap>
  );
};
export const RenderMemo = React.memo(RenderItem);
export const MainContentMemo = React.memo(
  MainContent,
  function (prevState, nextState) {
    return JSON.stringify(prevState) === JSON.stringify(nextState);
  },
);
