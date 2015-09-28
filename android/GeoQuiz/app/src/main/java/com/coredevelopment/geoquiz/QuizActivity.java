package com.coredevelopment.geoquiz;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;


public class QuizActivity extends ActionBarActivity {

    private static final String TAG = "QuizActivity";
    //The keys for the key-value pair that will be stored in the bundle
    private static final String KEY_INDEX = "index";
    private static final String KEY_IS_CHEATING = "IsCheating";

    private Button mTrueButton;
    private Button mFalseButton;
   // private Button mNextButton;
   // private Button mPrevButton;
    private ImageButton mNextButton;
    private ImageButton mPrevButton;
    private Button mCheatButton;
    private TextView mQuestionTextView;

    private TrueFalse[] mQuestionBank = new TrueFalse[] {
      new TrueFalse(R.string.question_oceans, true),
      new TrueFalse(R.string.question_midwest, false),
      new TrueFalse(R.string.question_africa, false),
      new TrueFalse(R.string.question_americas, true),
      new TrueFalse(R.string.question_asia, true)
    };

    private int mCurrentIndex = 0;                                          //store the index of which question the user is on
    private boolean[] mIsCheater = {false, false, false, false, false};     //store the if the user cheated or not for each question
    //private boolean mIsCheater = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "onCreate(Bundle) called");
        setContentView(R.layout.activity_quiz);

        //reference the button objects by ID
        mTrueButton         = (Button)findViewById(R.id.true_button);
        mFalseButton        = (Button)findViewById(R.id.false_button);
        //mNextButton       = (Button)findViewById(R.id.next_button);
        //mPrevButton       = (Button)findViewById(R.id.prev_button);
        mNextButton         = (ImageButton)findViewById(R.id.next_button);
        mPrevButton         = (ImageButton)findViewById(R.id.prev_button);
        mCheatButton        = (Button)findViewById(R.id.cheat_button);
        mQuestionTextView   = (TextView)findViewById(R.id.question_text_view);

        //grab the saved index location if it exists in the savedInstanceState
        if(savedInstanceState != null){
            mCurrentIndex = savedInstanceState.getInt(KEY_INDEX, 0);
            //mIsCheater = savedInstanceState.getBoolean(KEY_IS_CHEATING, false);
            mIsCheater = savedInstanceState.getBooleanArray(KEY_IS_CHEATING);
        }
        updateQuestion();

        //implement anonymous inner classes to set listeners for the buttons
        mTrueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               checkAnswer(true);
            }
        });

        mFalseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                checkAnswer(false);

            }
        });

        mNextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mCurrentIndex = (mCurrentIndex + 1) % mQuestionBank.length;
                //mIsCheater[mCurrentIndex] = false;
                updateQuestion();
            }
        });

        //have the text view act as the next button if clicked
        mQuestionTextView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mCurrentIndex = (mCurrentIndex + 1) % mQuestionBank.length;
                updateQuestion();
            }
        });

        mPrevButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mCurrentIndex = (mCurrentIndex - 1);
                if(mCurrentIndex < 0)
                    mCurrentIndex = mQuestionBank.length - 1;

                updateQuestion();
            }
        });

        mCheatButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //start cheat activity when clicked

                /*
                    Intensts are communication tools used by components (in this case the an Activity, specifically QuizActivity)
                        to tell the Android OS to do somthing. Here we are creating an Intent meant to tell the OS to start
                        CheatActivity.class which can be found in the package that QuizActivity.this is in. Start the activity
                        with the startActivity() method and pass the intent as a parameter.
                 */
                Intent i = new Intent(QuizActivity.this, CheatActivity.class);

                //add an extra (extra data to be passed to the CheatActivity)
                boolean answerIsTrue = mQuestionBank[mCurrentIndex].isTrueQuestion();
                i.putExtra(CheatActivity.EXTRA_ANSWER_IS_TRUE, answerIsTrue);

                //startActivity(i);
                //the below variation of startActivity waits to hear back from the child Activity when done
                startActivityForResult(i, 0);
            }
        });


    }

    /*
        Override the onSaveInstanceState(Bundle) method to include saving
            the mCurrentIndex variable whenever the screen is rotated or
            onDestroy is called.
     */
    @Override
    public void onSaveInstanceState(Bundle savedInstanceState){
        super.onSaveInstanceState(savedInstanceState);
        Log.i(TAG, "onSaveInstanceState");
        savedInstanceState.putInt(KEY_INDEX, mCurrentIndex);
        //savedInstanceState.putBoolean(KEY_IS_CHEATING, mIsCheater);
        savedInstanceState.putBooleanArray(KEY_IS_CHEATING, mIsCheater);
    }

    @Override
    public void onStart(){
        super.onStart();
        Log.d(TAG, "onStart() called");
    }

    @Override
    public void onPause(){
        super.onPause();
        Log.d(TAG, "onPause() called");
    }

    @Override
    public void onResume(){
        super.onResume();
        Log.d(TAG, "onResume() called");
    }

    @Override
    public void onStop(){
        super.onStop();
        Log.d(TAG, "onStop() called");
    }

    @Override
    public void onDestroy(){
        super.onDestroy();
        Log.d(TAG, "onDestroy() called");
    }

    /**
     * Override the onActivityResult() function to handle data getting passed back from
     *   CheatActivity.
     * In this override, we are expecting a result for mIsCheater.
     */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data){
        if(data == null)
            return;

        //mIsCheater = data.getBooleanExtra(CheatActivity.EXTRA_ANWSER_SHOWN, false);
        mIsCheater[mCurrentIndex] = data.getBooleanExtra(CheatActivity.EXTRA_ANWSER_SHOWN, false);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_quiz, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    /**
     * Set the text to the question at the current index
     */
    private void updateQuestion(){
       // Log.d(TAG, "Updating question text for question #" + mCurrentIndex, new Exception());
        int question = mQuestionBank[mCurrentIndex].getQuestion();
        mQuestionTextView.setText(question);
    }

    /**
     * This method will accept a boolean variable that identifies
     *  whether the user pressed True or False. Then it will check
     *  the user's answer against the current correct answer. Then
     *  make a toast to tell the user if they are correct or not.
     * @param userPressedTrue -> answer passed by the user.
     */
    private void checkAnswer(boolean userPressedTrue) {
        boolean answerIsTrue = mQuestionBank[mCurrentIndex].isTrueQuestion();

        int messageRedId = 0;

        //if (mIsCheater) {
        if (mIsCheater[mCurrentIndex]) {
            messageRedId = R.string.judgement_toast;
        } else {
            if (userPressedTrue == answerIsTrue) {
                messageRedId = R.string.correct_toast;
            } else {
                messageRedId = R.string.incorrect_toast;
        }
        }

        Toast.makeText(this, messageRedId, Toast.LENGTH_SHORT)
                .show();
    }
}
