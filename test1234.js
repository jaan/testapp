{
    "App": {
        "Name": "Mobile Agent setup test-v104",
        "HomeScreenURL": {
            "Portrait": "https://c.na50.content.force.com/servlet/servlet.ImageServer?id=0156A000000I0WM&oid=00D6A000000u3Q1&lastMod=1495574987000",
            "Landscape": "https://c.na50.content.force.com/servlet/servlet.ImageServer?id=0156A000000I0WM&oid=00D6A000000u3Q1&lastMod=1495574987000"
        },
        "GlobalSearch": {
            "Account": {
                "Fields": "Id, Name, RecordType.Name"
            },
            "Contact": {
                "Fields": "Id, Name, Title"
            },
            "Lead": {
                "Fields": "Id, Name, Title"
            },
            "Order": {
                "Fields": "Id, Name, Status"
            }
        },
        "GlobalMenu": [
            "Home"
        ],
        "Theme": {
            "NavBarColor": "#009CE2",
            "NavBarFontColor": "#FFFFFF",
            "ActionButtonColor": "#009CE2"
        }
    },
    "Admin": {
        "MinAppVersion": "1.0.0",
        "EnableVFPage": false,
        "EnableOmniOut": false,
        "EnableInteractionLauncher": true,
        "DevMode": true,
        "EnableMetadataCaching": true,
        "RetailApp": {
            "EnableRetailApp": true,
            "PriceListId": "a2V6A000000YX3E",
            "AccountId": "0016A000003aB7k"
        }
    },
    "AppContent": {
        "Home": {
            "Type": "VlocityLayout",
            "Label": "Home",
            "MenuIcon": "standard_home",
            "VlocityLayout": "<vloc-layout layout-name='mobile-ret-home' ctrl='MobileController' is-loaded='vm.isLayoutLoaded'></vloc-layout>",
            "ActionGrid": {
                "VlocityLayoutName": "mobile-ret-action-grid-home"
            }
        },
        "RETProductList": {
            "Type": "VlocityLayout",
            "Label": "RETProductList",
            "MenuIcon": "standard_product_item",
            "NavButton": {
                "IconName": "ion-ios-cart",
                "Path": "/app/univ//{{id}}/"
            },
            "VlocityLayout": "<vloc-layout layout-name='mobile-ret-product-grid' ctrl='MobileController' is-loaded='isHighlightCardLoaded'></vloc-layout>",
            "ActionGrid": {
                "VlocityLayoutName": "mobile-ret-action-grid-account"
            }
        },
        "RETAssetDetail": {
            "Type": "VlocityLayout",
            "Label": "RETAssetDetail",
            "MenuIcon": "standard_product_item_transaction",
            "VlocityLayout": "<vloc-layout layout-name='mobile-ret-asset-detail-container' ctrl='MobileController' is-loaded='isHighlightCardLoaded'></vloc-layout>",
            "ActionGrid": {
                "VlocityLayoutName": "mobile-ret-action-grid-asset"
            }
        },
        "Account": {
            "Type": "ListView",
            "Label": "Accounts",
            "MenuIcon": "standard_account",
            "Fields": [
                "id"
            ],
            "Display": {
                "Image": "PhotoUrl",
                "Title": "Name",
                "Subtitle": [
                    "Type"
                ]
            },
            "SOSL": {
                "In": "Name"
            },
            "From": "Account",
            "OrderBy": "LastViewedDate DESC",
            "Limit": 100,
            "SubView": {
                "ActionGrid": {
                    "VlocityLayoutName": "mobile-ret-action-grid-account"
                },
                "Tabs": [
                    "Summary"
                ],
                "Summary": {
                    "Label": "Summary",
                    "Type": "VlocityLayout"
                },
                "Activity": {
                    "Label": "Activity",
                    "Type": "VlocityLayout",
                    "VlocityLayout": "<vloc-layout layout-name='mobile-ret-product-grid' ctrl='MobileController' is-loaded='isHighlightCardLoaded'></vloc-layout"
                },
                "Detail": {
                    "Label": "DETAIL",
                    "Type": "FormEditing",
                    "ReloadVlocityLayout": [
                        "mobile-account-highlight"
                    ],
                    "ReloadTabs": "future reload anytab or tabs"
                },
                "Orders": {
                    "Label": "Offers",
                    "Type": "ListView",
                    "Display": {
                        "Image": "PhotoUrl",
                        "Title": "Name",
                        "Subtitle": [
                            "Status"
                        ],
                        "Actions": [
                            "Delete"
                        ],
                        "Delete": "vm.deleteAction({{id}})",
                        "ViewDetail": "vm.detail({{id}})"
                    },
                    "Fields": [
                        "id"
                    ],
                    "Where": "AccountId = '{{id}}",
                    "From": "Order",
                    "OrderBy": "OrderNumber",
                    "Limit": 100
                }
            }
        },
        "Contact": {
            "Type": "ListView",
            "Label": "Contacts",
            "MenuIcon": "standard_contact",
            "Fields": [
                "id"
            ],
            "Display": {
                "Image": "PhotoUrl",
                "Title": [
                    "FirstName"
                ],
                "Subtitle": [
                    "Account.Name"
                ]
            },
            "From": "Contact",
            "OrderBy": "LastViewedDate DESC",
            "Limit": 100,
            "SubView": {
                "Tabs": [
                    "Stories"
                ],
                "ActionGrid": {
                    "VlocityLayoutName": "mobile-ret-action-grid-contact"
                },
                "Stories": {
                    "Label": "STORIES",
                    "Type": "VlocityLayout",
                    "VlocityLayout": "<vloc-layout layout-name=\"mobile-contact-highlight\" ctrl=\"HighLightPanelController\" is-loaded=\"isHighlightCardLoaded\"></vloc-layout>"
                },
                "Profile": {
                    "Label": "PROFILE",
                    "Type": "ProfileLightning"
                },
                "Detail": {
                    "Label": "DETAIL",
                    "Type": "FormEditing",
                    "ReloadVlocityLayout": [
                        "mobile-contact-highlight"
                    ],
                    "ReloadTabs": "future reload anytab or tabs"
                }
            }
        },
        "Lead": {
            "Type": "ListView",
            "Fields": [
                "id"
            ],
            "Label": "Leads",
            "MenuIcon": "standard_lead",
            "Display": {
                "Image": "PhotoUrl",
                "Title": [
                    "FirstName"
                ],
                "Subtitle": [
                    "Status"
                ]
            },
            "From": "Lead",
            "OrderBy": "LastViewedDate DESC",
            "Limit": 100,
            "SubView": {
                "ActionGrid": {
                    "VlocityLayoutName": "mobile-ret-action-grid-lead"
                },
                "Tabs": [
                    "Stories"
                ],
                "Stories": {
                    "Label": "Stories",
                    "Type": "VlocityLayout",
                    "VlocityLayout": "<vloc-layout layout-name=\"mobile-lead-highlight\" ctrl=\"HighLightPanelController\" is-loaded=\"isHighlightCardLoaded\"></vloc-layout>"
                },
                "Profile": {
                    "Label": "Profile",
                    "Type": "ProfileLightning"
                },
                "Detail": {
                    "Label": "DETAIL",
                    "Type": "FormEditing"
                }
            }
        },
        "Product": {
            "Type": "ListView",
            "Label": "Product",
            "MenuIcon": "standard_product",
            "Fields": [
                "id"
            ],
            "Display": {
                "Title": [
                    "Name"
                ],
                "Subtitle": [
                    "Description"
                ],
                "Actions": [
                    "Delete"
                ],
                "Delete": "vm.deleteAction({{id}})",
                "ViewDetail": "vm.detail({{id}})"
            },
            "From": "Product2",
            "OrderBy": "Name",
            "Limit": 100,
            "SubView": {
                "Tabs": [
                    "Detail"
                ],
                "Detail": {
                    "Label": "DETAIL",
                    "Type": "VlocityLayout",
                    "VlocityLayout": "<vloc-layout layout-name=\"mobile-ret-product-detail\" ctrl=\"MobileController\" is-loaded=\"isHighlightCardLoaded\"></vloc-layout>"
                }
            }
        },
        "Case": {
            "Type": "ListView",
            "Label": "Case",
            "MenuIcon": "standard_case",
            "Fields": [
                "id"
            ],
            "Display": {
                "Title": [
                    "Subject"
                ],
                "Subtitle": [
                    "Status"
                ]
            },
            "From": "Case",
            "OrderBy": "LastModifiedDate"
        },
        "CustomerInteraction__c": {
            "Type": "ListView",
            "Label": "Queue",
            "MenuIcon": "standard_social",
            "Fields": [
                "id"
            ],
            "Display": {
                "Title": [
                    "Customer_Name__c"
                ],
                "Subtitle": [
                    "Customer_Name__c"
                ]
            },
            "From": "nsPrefix__CustomerInteraction__c",
            "OrderBy": "LastModifiedDate"
        },
        "Order": {
            "Type": "ListView",
            "Label": "Orders",
            "MenuIcon": "standard_orders",
            "Fields": [
                "id"
            ],
            "Display": {
                "Title": [
                    "OrderNumber"
                ],
                "Subtitle": [
                    "Account.Name"
                ],
                "Subtitle_Separator": " | "
            },
            "From": "Order",
            "OrderBy": "OrderNumber",
            "Limit": 100,
            "SubView": {
                "Tabs": [
                    "CPQ"
                ],
                "CPQ": {
                    "Label": "CPQ",
                    "Type": "VlocityLayout"
                },
                "Detail": {
                    "Label": "DETAIL",
                    "Type": "FormEditing"
                }
            }
        }
    }
}