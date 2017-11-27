import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore, history } from './Store/configureStore'
import Root from './Containers/Root'

const store = configureStore()

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./Containers/Root', () => {
        const newConfigureStore = require('./Store/configureStore')
        const newStore = newConfigureStore.configureStore()
        const newHistory = newConfigureStore.history
        const NewRoot = require('./Containers/Root').default
        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
