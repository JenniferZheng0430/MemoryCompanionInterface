import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { MessageIcon } from './MessageIcon';
import classes from './MessangerChatActions.module.css';
import { MessangerChatActionsIcon } from './MessangerChatActionsIcon';
import { MessangerChatActionsIcon2 } from './MessangerChatActionsIcon2';
import { MessangerChatActionsIcon3 } from './MessangerChatActionsIcon3';
import { MessangerChatActionsIcon4 } from './MessangerChatActionsIcon4';
import { ShapeIcon } from './ShapeIcon';

interface Props {
  className?: string;
}
/* @figmaId 222:10 */
export const MessangerChatActions: FC<Props> = memo(function MessangerChatActions(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.message}>
        <MessageIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.hiMargaretHowAreYou}>Hi, Margaret! How are you?</div>
      <div className={classes.iAmGoodIsMyNameMargaret}>I am good. Is my name Margaret?</div>
      <div className={classes.yesMargaretThatSYourNameYouHav}>
        <div className={classes.textBlock}>Yes, Margaret, that&#39;s your name! </div>
        <div className={classes.textBlock2}>You have such a lovely name.</div>
      </div>
      <div className={classes.howHaveYouBeenSpendingYourDay}>How have you been spending your day?</div>
      <div className={classes.todayWasNiceMyGrandchildrenCam}>
        <div className={classes.textBlock3}>Today was nice. </div>
        <div className={classes.textBlock4}>My grandchildren came over to spend time.</div>
      </div>
      <div className={classes.thatSoundsLovelyMargaretSpendi}>
        That sounds lovely, Margaret! Spending time with family is always special. Speaking of family, do you have any
        favorite memories with your own family?
      </div>
      <div className={classes.iDonTRememberMuchDoYouHaveAnyS}>
        <div className={classes.textBlock5}>I don&#39;t remember much. </div>
        <div className={classes.textBlock6}>Do you have any stories?</div>
      </div>
      <div className={classes.ofCourseMargaretIHavePlentyOfS}>
        <div className={classes.textBlock7}>
          Of course, Margaret! I have plenty of stories to share with you. Let me tell you about a special memory from
          your childhood.
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
        <div className={classes.textBlock9}>
          Do you remember your mother&#39;s homemade apple pies? They were absolutely delicious, weren&#39;t they?{' '}
        </div>
      </div>
      <div className={classes.theAromaOfCinnamonAndWarmCaram}>
        The aroma of cinnamon and warm, caramelized apples filled the kitchen. It must have been such a joy to gather
        around the dinner table with your loved ones, sharing stories and laughter while enjoying a slice of that
        delightful pie.
      </div>
      <div className={classes.memoryCompanion}>MemoryCompanion</div>
      <div className={classes.margaret}>Margaret</div>
      <div className={classes.icon2}>
        <MessangerChatActionsIcon className={classes.icon3} />
      </div>
      <div className={classes.icon4}>
        <MessangerChatActionsIcon2 className={classes.icon5} />
      </div>
      <div className={classes.icon6}>
        <MessangerChatActionsIcon3 className={classes.icon7} />
      </div>
      <div className={classes.icon8}>
        <MessangerChatActionsIcon4 className={classes.icon9} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle22}></div>
      <div className={classes.memoryCompanion2}>MemoryCompanion</div>
      <div className={classes.recordYourSpeech}>Record your speech</div>
      <div className={classes.shape}>
        <ShapeIcon className={classes.icon10} />
      </div>
    </div>
  );
});
