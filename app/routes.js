//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// ****************** OLD ROUTES PRE-MARCH 2026 ****************** //
// ****************** New routing at the bottom ****************** //


// Logging session data  

// router.use((req, res, next) => {
//     const log = {
//         method: req.method,
//         url: req.originalUrl,
//         data: req.session.data
//     }
//     console.log(JSON.stringify(log, null, 2))

//     next()
// })
////////////// ------      v1 routes ---------- ////////////////////

// // routes for Outcome reason page
// router.post('/additional-outcomes', function (req, res) {
//     var outcomeReasonVar = req.session.data['outcomeReason']
//     if (outcomeReasonVar == "Full disallowance") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/full-disallowance')
//     } if (outcomeReasonVar == "Partial disallowance") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/partial-disallowance')
//     }
//     if (outcomeReasonVar == "outstandingCAU") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/outstanding-action-outcome')
//     }
//     if (outcomeReasonVar == "no-action-outcome") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/no-action-outcome')
//     }
// })

// // routes for Full disallowance reason page
// router.post('/full-disallowance', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/payment-type')
// })

// // routes for Full disallowance reason page
// router.post('/partial-disallowance', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/payment-type')
// })

// // routes for payment type selection page
// router.post('/payment-type', function (req, res) {
//     var paymentTypeVar = req.session.data['paymentType']
//     if (paymentTypeVar == "Overpayment") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-details')
//     } if (paymentTypeVar == "Underpayment") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/underpayment-details')
//     }
//     if (paymentTypeVar == "Underpayments and overpayments") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-details')
//     }
// })

// ///////// routes for overpayment page ////////
// // routes for overpayment amount page selection page
// router.post('/overpayment-details', function (req, res) {
//     var errorTypeVar = req.session.data['errorType']
//     if (errorTypeVar == "Official error") {
//         res.redirect('Vep-ca-mi-alerts/outcomes/total-overpayments-summary')
//     } else {
//         res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-amount-recovery')
//     }
// })

// // routes for overpayment amount recovery selection page
// router.post('/overpayment-amount-recovery', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/overpayment-civil-penalty')
// })

// // routes for overpayment check your answer page
// router.post('/overpayment-civil-penalty', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/total-overpayments-summary')
// })

// ///////// routes for underpaymemnt page ////////

// // routes for underpayment check your answer page
// router.post('/underpayment-details', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/total-underpayments-summary')
// })



// // routes for Outstanding action in CAU reason page
// router.post('/outstanding-action-outcome', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/outcome-reason-summary')
// })

// // routes for No action in CAU reason page
// router.post('/no-action-outcome', function (req, res) {
//     res.redirect('Vep-ca-mi-alerts/outcomes/no-action-outcome-summary')
// })

///////////-------------    v2 routes ---------- //////////////


// routes for Outcome reason page
router.post('/additional-outcomes', function (req, res) {
    var outcomeReasonVar = req.session.data['outcomeReason']
    if (outcomeReasonVar == "Full disallowance") {
        res.redirect('v2/outcomes/full-disallowance')
    } if (outcomeReasonVar == "Partial disallowance") {
        res.redirect('v2/outcomes/partial-disallowance')
    }
    if (outcomeReasonVar == "outstandingCAU") {
        res.redirect('v2/outcomes/outstanding-action-outcome')
    }
    if (outcomeReasonVar == "no-action-outcome") {
        res.redirect('v2/outcomes/no-action-outcome')
    }
    if (outcomeReasonVar == "no-change-to-award") {
        res.redirect('v2/outcomes/no-change-to-award-outcome')
    }
})

// routes for Full disallowance reason page
router.post('/full-disallowance', function (req, res) {
    res.redirect('v2/outcomes/payment-type')
})

// routes for Full disallowance reason page
router.post('/partial-disallowance', function (req, res) {
    res.redirect('v2/outcomes/payment-type')
})

// routes for Full disallowance reason page
router.post('/task-list-tab', function (req, res) {
    res.redirect('v2/alerts-profile/task-list-tab')
})
// routes for payment type selection page
router.post('/payment-type', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment") {
        res.redirect('v2/outcomes/overpayment-details')
    } if (paymentTypeVar == "Underpayment") {
        res.redirect('v2/outcomes/underpayment-details')
    }
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes/overpayment-details')
    }
})

///////// routes for overpayment page ////////
// routes for overpayment amount page selection page
router.post('/overpayment-details', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes/underpayment-details-mixed')
    }
    res.redirect('v2/outcomes/total-overpayments-summary')

})

// routes for overpayment amount recovery selection page
router.post('/overpayment-amount-recovery', function (req, res) {
    res.redirect('v2/outcomes/overpayment-civil-penalty')
})

// routes for overpayment check your answer page
router.post('/overpayment-civil-penalty', function (req, res) {
    res.redirect('v2/outcomes/total-overpayments-summary')
})

///////// routes for underpaymemnt page ////////

// routes for underpayment check your answer page
router.post('/underpayment-details', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes/total-payments-summary')
    }
    res.redirect('v2/outcomes/total-underpayments-summary')
})

// routes for underpayment check your answer page
router.post('/underpayment-details-mixed', function (req, res) {
    res.redirect('v2/outcomes/total-payments-summary')
})



// routes for Outstanding action in CAU reason page
router.post('/outstanding-action-outcome', function (req, res) {
    res.redirect('v2/outcomes/outcome-reason-summary')
})

// routes for No action in CAU reason page
router.post('/no-action-outcome', function (req, res) {
    res.redirect('v2/outcomes/no-action-outcome-summary')
})

router.post('/no-change-to-award-outcome', function (req, res) {
    res.redirect('v2/outcomes/no-change-to-award-summary')
})


// routes for error pages

router.post('/additional-outcomes-error', function (req, res) {
    var outcomeReasonVar = req.session.data['outcomeReason']
    if (outcomeReasonVar == "Full disallowance") {
        res.redirect('v2/error-pages/full-disallowance-error')
    } if (outcomeReasonVar == "Partial disallowance") {
        res.redirect('v2/error-pages/partial-disallowance-error')
    }
    if (outcomeReasonVar == "outstandingCAU") {
        res.redirect('v2/error-pages/outstanding-action-outcome-error')
    }
    if (outcomeReasonVar == "no-action-outcome") {
        res.redirect('v2/error-pages/no-action-outcome-error')
    }
    if (outcomeReasonVar == "no-change-to-award") {
        res.redirect('v2/error-pages/no-change-to-award-outcome-error')
    }
})

router.post('/additional-outcomes-error', function (req, res) {
    res.redirect('v2/error-pages/full-disallowance-error')
})

router.post('/full-disallowance-error', function (req, res) {
    res.redirect('v2/error-pages/payment-type-error')
})

router.post('/partial-disallowance-error', function (req, res) {
    res.redirect('v2/error-pages/payment-type-error')
})

router.post('/payment-type-error', function (req, res) {
    res.redirect('v2/error-pages/overpayment-details-error')
})


router.post('/overpayment-details-error', function (req, res) {
    res.redirect('v2/outcomes/total-overpayments-summary')
})

// routes for outcome reasons with new content /////////////

router.post('/outcomes_new_content/additional-outcomes', function (req, res) {
    var outcomeReasonVar = req.session.data['outcomeReason']
    if (outcomeReasonVar == "Full disallowance") {
        res.redirect('v2/outcomes-new-content/full-disallowance')
    } if (outcomeReasonVar == "Partial disallowance") {
        res.redirect('v2/outcomes-new-content/partial-disallowance')
    }
    if (outcomeReasonVar == "outstandingCAU") {
        res.redirect('v2/outcomes-new-content/outstanding-action-outcome')
    }
    if (outcomeReasonVar == "no-action-outcome") {
        res.redirect('v2/outcomes-new-content/no-action-outcome')
    }
    if (outcomeReasonVar == "no-change-to-award") {
        res.redirect('v2/outcomes-new-content/no-change-to-award-outcome')
    }
})

// routes for Full disallowance reason page
router.post('/full-disallowance', function (req, res) {
    res.redirect('v2/outcomes-new-content/payment-type')
})

// routes for Full disallowance reason page
router.post('/partial-disallowance', function (req, res) {
    res.redirect('v2/outcomes-new-content/payment-type')
})

// routes for Full disallowance reason page
router.post('/task-list-tab', function (req, res) {
    res.redirect('v2/alerts-profile/task-list-tab')
})
// routes for payment type selection page
router.post('/payment-type', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment") {
        res.redirect('v2/outcomes-new-content/overpayment-details')
    } if (paymentTypeVar == "Underpayment") {
        res.redirect('v2/outcomes-new-content/underpayment-details')
    }
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes-new-content/overpayment-details')
    }
})

///////// routes for overpayment page ////////
// routes for overpayment amount page selection page
router.post('/overpayment-details', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes-new-content/underpayment-details-mixed')
    }
    res.redirect('v2/outcomes-new-content/total-overpayments-summary')

})

// routes for overpayment amount recovery selection page
router.post('/overpayment-amount-recovery', function (req, res) {
    res.redirect('v2/outcomes-new-content/overpayment-civil-penalty')
})

// routes for overpayment check your answer page
router.post('/overpayment-civil-penalty', function (req, res) {
    res.redirect('v2/outcomes-new-content/total-overpayments-summary')
})

///////// routes for underpaymemnt page ////////

// routes for underpayment check your answer page
router.post('/underpayment-details', function (req, res) {
    var paymentTypeVar = req.session.data['paymentType']
    if (paymentTypeVar == "Overpayment and arrears") {
        res.redirect('v2/outcomes-new-content/total-payments-summary')
    }
    res.redirect('v2/outcomes-new-content/total-underpayments-summary')
})

// routes for underpayment check your answer page
router.post('/underpayment-details-mixed', function (req, res) {
    res.redirect('v2/outcomes-new-content/total-payments-summary')
})



// routes for Outstanding action in CAU reason page
router.post('/outstanding-action-outcome', function (req, res) {
    res.redirect('v2/outcomes-new-content/outcome-reason-summary')
})

// routes for No action in CAU reason page
router.post('/no-action-outcome', function (req, res) {
    res.redirect('v2/outcomes-new-content/no-action-outcome-summary')
})

router.post('/no-change-to-award-outcome', function (req, res) {
    res.redirect('v2/outcomes-new-content/no-change-to-award-summary')
})


// routes for error pages

router.post('/additional-outcomes-error', function (req, res) {
    var outcomeReasonVar = req.session.data['outcomeReason']
    if (outcomeReasonVar == "Full disallowance") {
        res.redirect('v2/error-pages/full-disallowance-error')
    } if (outcomeReasonVar == "Partial disallowance") {
        res.redirect('v2/error-pages/partial-disallowance-error')
    }
    if (outcomeReasonVar == "outstandingCAU") {
        res.redirect('v2/error-pages/outstanding-action-outcome-error')
    }
    if (outcomeReasonVar == "no-action-outcome") {
        res.redirect('v2/error-pages/no-action-outcome-error')
    }
    if (outcomeReasonVar == "no-change-to-award") {
        res.redirect('v2/error-pages/no-change-to-award-outcome-error')
    }
})

router.post('/additional-outcomes-error', function (req, res) {
    res.redirect('v2/error-pages/full-disallowance-error')
})

router.post('/full-disallowance-error', function (req, res) {
    res.redirect('v2/error-pages/payment-type-error')
})

router.post('/partial-disallowance-error', function (req, res) {
    res.redirect('v2/error-pages/payment-type-error')
})

router.post('/payment-type-error', function (req, res) {
    res.redirect('v2/error-pages/overpayment-details-error')
})


router.post('/overpayment-details-error', function (req, res) {
    res.redirect('v2/outcomes-new-content/total-overpayments-summary')
})




// ****************** NEW ROUTING IMPORTS ****************** //
require('./views/v5/dashboards/_dashboard-routes')
require('./views/v6/dashboards/_dashboard-routes')

require('./views/v7/dashboards/_dashboard-routes')
require('./views/v7/manage-interest/_interest-routes')
require('./views/v7/record-outcome/_routes')
require('./views/v7/_routes')

require('./views/v8/record-outcome/_routes')
require('./views/v8/dashboards/_dashboard-routes')

require('./views/sandpit/_sandpit-routes')

module.exports = router


