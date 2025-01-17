// third-party
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { loginManagement } from '../hooks/api/LoginManagement/LoginManagement';
import { mainManagement } from '../hooks/api/MainManagement/MainManagement';
import { noticeManagement } from '../hooks/api/NoticeManagement/NoticeManagement';
import { learningManagement } from '../hooks/api/LearningManagement/LearningManagement';
import { commonManagement } from '../hooks/api/CommonManagement/CommonManagement';
import { evaluationManagement } from '../hooks/api/EvaluationManagement/EvaluationManagement';
import { wrongAnswerManagement } from '../hooks/api/WrongAnswerManagement/WrongAnswerManagement';
// import { studentsManagement } from '../hooks/api/StudentsManagement/StudentsManagement';
// import { preferencesManagement } from '../hooks/api/PreferencesManagement/PreferencesManagement';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

export const store = configureStore({
    reducer: {
        [mainManagement.reducerPath]: mainManagement.reducer,
        [loginManagement.reducerPath]: loginManagement.reducer,
        [noticeManagement.reducerPath]: noticeManagement.reducer,
        [learningManagement.reducerPath]: learningManagement.reducer,
        [commonManagement.reducerPath]: commonManagement.reducer,
        [evaluationManagement.reducerPath]: eduManagement.reducer,
        [wrongAnswerManagement.reducerPath]: studentsManagement.reducer
        // [preferencesManagement.reducerPath]: preferencesManagement.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(mainManagement.middleware)
            .concat(loginManagement.middleware)
            .concat(noticeManagement.middleware)
            .concat(learningManagement.middleware)
            .concat(commonManagement.middleware)
            .concat(evaluationManagement.middleware)
            .concat(wrongAnswerManagement.middleware)
    // .concat(studentsManagement.middleware)
    // .concat(preferencesManagement.middleware)
});

setupListeners(store.dispatch);
