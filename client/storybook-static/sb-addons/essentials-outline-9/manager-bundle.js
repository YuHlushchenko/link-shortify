try {
  ;(() => {
    var t = __REACT__,
      {
        Children: k,
        Component: R,
        Fragment: P,
        Profiler: L,
        PureComponent: w,
        StrictMode: E,
        Suspense: D,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: v,
        cloneElement: x,
        createContext: H,
        createElement: M,
        createFactory: F,
        createRef: U,
        forwardRef: N,
        isValidElement: G,
        lazy: W,
        memo: u,
        startTransition: K,
        unstable_act: Y,
        useCallback: d,
        useContext: q,
        useDebugValue: V,
        useDeferredValue: Z,
        useEffect: p,
        useId: z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: X,
        useMemo: $,
        useReducer: j,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__
    var io = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: po,
        Provider: mo,
        RequestResponseError: So,
        addons: l,
        combineParameters: Co,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: Ao,
        eventMatchesShortcut: To,
        eventToShortcut: _o,
        experimental_requestResponse: bo,
        isMacLike: go,
        isShortcutTaken: yo,
        keyToSymbol: Oo,
        merge: Bo,
        mockChannel: fo,
        optionOrAltSymbol: ko,
        shortcutMatchesShortcut: Ro,
        shortcutToHumanString: Po,
        types: m,
        useAddonState: Lo,
        useArgTypes: wo,
        useArgs: Eo,
        useChannel: Do,
        useGlobalTypes: vo,
        useGlobals: S,
        useParameter: xo,
        useSharedState: Ho,
        useStoryPrepared: Mo,
        useStorybookApi: C,
        useStorybookState: Fo,
      } = __STORYBOOK_API__
    var Ko = __STORYBOOK_COMPONENTS__,
      {
        A: Yo,
        ActionBar: qo,
        AddonPanel: Vo,
        Badge: Zo,
        Bar: zo,
        Blockquote: Jo,
        Button: Qo,
        ClipboardCode: Xo,
        Code: $o,
        DL: jo,
        Div: on,
        DocumentWrapper: nn,
        EmptyTabContent: en,
        ErrorFormatter: cn,
        FlexBar: tn,
        Form: rn,
        H1: In,
        H2: an,
        H3: ln,
        H4: sn,
        H5: un,
        H6: dn,
        HR: pn,
        IconButton: h,
        IconButtonSkeleton: mn,
        Icons: Sn,
        Img: Cn,
        LI: hn,
        Link: An,
        ListItem: Tn,
        Loader: _n,
        Modal: bn,
        OL: gn,
        P: yn,
        Placeholder: On,
        Pre: Bn,
        ResetWrapper: fn,
        ScrollArea: kn,
        Separator: Rn,
        Spaced: Pn,
        Span: Ln,
        StorybookIcon: wn,
        StorybookLogo: En,
        Symbols: Dn,
        SyntaxHighlighter: vn,
        TT: xn,
        TabBar: Hn,
        TabButton: Mn,
        TabWrapper: Fn,
        Table: Un,
        Tabs: Nn,
        TabsState: Gn,
        TooltipLinkList: Wn,
        TooltipMessage: Kn,
        TooltipNote: Yn,
        UL: qn,
        WithTooltip: Vn,
        WithTooltipPure: Zn,
        Zoom: zn,
        codeCommon: Jn,
        components: Qn,
        createCopyToClipboardFunction: Xn,
        getStoryHref: $n,
        icons: jn,
        interleaveSeparators: oe,
        nameSpaceClassNames: ne,
        resetComponents: ee,
        withReset: ce,
      } = __STORYBOOK_COMPONENTS__
    var le = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: ie,
        AccessibilityIcon: se,
        AddIcon: ue,
        AdminIcon: de,
        AlertAltIcon: pe,
        AlertIcon: me,
        AlignLeftIcon: Se,
        AlignRightIcon: Ce,
        AppleIcon: he,
        ArrowBottomLeftIcon: Ae,
        ArrowBottomRightIcon: Te,
        ArrowDownIcon: _e,
        ArrowLeftIcon: be,
        ArrowRightIcon: ge,
        ArrowSolidDownIcon: ye,
        ArrowSolidLeftIcon: Oe,
        ArrowSolidRightIcon: Be,
        ArrowSolidUpIcon: fe,
        ArrowTopLeftIcon: ke,
        ArrowTopRightIcon: Re,
        ArrowUpIcon: Pe,
        AzureDevOpsIcon: Le,
        BackIcon: we,
        BasketIcon: Ee,
        BatchAcceptIcon: De,
        BatchDenyIcon: ve,
        BeakerIcon: xe,
        BellIcon: He,
        BitbucketIcon: Me,
        BoldIcon: Fe,
        BookIcon: Ue,
        BookmarkHollowIcon: Ne,
        BookmarkIcon: Ge,
        BottomBarIcon: We,
        BottomBarToggleIcon: Ke,
        BoxIcon: Ye,
        BranchIcon: qe,
        BrowserIcon: Ve,
        ButtonIcon: Ze,
        CPUIcon: ze,
        CalendarIcon: Je,
        CameraIcon: Qe,
        CategoryIcon: Xe,
        CertificateIcon: $e,
        ChangedIcon: je,
        ChatIcon: oc,
        CheckIcon: nc,
        ChevronDownIcon: ec,
        ChevronLeftIcon: cc,
        ChevronRightIcon: tc,
        ChevronSmallDownIcon: rc,
        ChevronSmallLeftIcon: Ic,
        ChevronSmallRightIcon: ac,
        ChevronSmallUpIcon: lc,
        ChevronUpIcon: ic,
        ChromaticIcon: sc,
        ChromeIcon: uc,
        CircleHollowIcon: dc,
        CircleIcon: pc,
        ClearIcon: mc,
        CloseAltIcon: Sc,
        CloseIcon: Cc,
        CloudHollowIcon: hc,
        CloudIcon: Ac,
        CogIcon: Tc,
        CollapseIcon: _c,
        CommandIcon: bc,
        CommentAddIcon: gc,
        CommentIcon: yc,
        CommentsIcon: Oc,
        CommitIcon: Bc,
        CompassIcon: fc,
        ComponentDrivenIcon: kc,
        ComponentIcon: Rc,
        ContrastIcon: Pc,
        ControlsIcon: Lc,
        CopyIcon: wc,
        CreditIcon: Ec,
        CrossIcon: Dc,
        DashboardIcon: vc,
        DatabaseIcon: xc,
        DeleteIcon: Hc,
        DiamondIcon: Mc,
        DirectionIcon: Fc,
        DiscordIcon: Uc,
        DocChartIcon: Nc,
        DocListIcon: Gc,
        DocumentIcon: Wc,
        DownloadIcon: Kc,
        DragIcon: Yc,
        EditIcon: qc,
        EllipsisIcon: Vc,
        EmailIcon: Zc,
        ExpandAltIcon: zc,
        ExpandIcon: Jc,
        EyeCloseIcon: Qc,
        EyeIcon: Xc,
        FaceHappyIcon: $c,
        FaceNeutralIcon: jc,
        FaceSadIcon: ot,
        FacebookIcon: nt,
        FailedIcon: et,
        FastForwardIcon: ct,
        FigmaIcon: tt,
        FilterIcon: rt,
        FlagIcon: It,
        FolderIcon: at,
        FormIcon: lt,
        GDriveIcon: it,
        GithubIcon: st,
        GitlabIcon: ut,
        GlobeIcon: dt,
        GoogleIcon: pt,
        GraphBarIcon: mt,
        GraphLineIcon: St,
        GraphqlIcon: Ct,
        GridAltIcon: ht,
        GridIcon: At,
        GrowIcon: Tt,
        HeartHollowIcon: _t,
        HeartIcon: bt,
        HomeIcon: gt,
        HourglassIcon: yt,
        InfoIcon: Ot,
        ItalicIcon: Bt,
        JumpToIcon: ft,
        KeyIcon: kt,
        LightningIcon: Rt,
        LightningOffIcon: Pt,
        LinkBrokenIcon: Lt,
        LinkIcon: wt,
        LinkedinIcon: Et,
        LinuxIcon: Dt,
        ListOrderedIcon: vt,
        ListUnorderedIcon: xt,
        LocationIcon: Ht,
        LockIcon: Mt,
        MarkdownIcon: Ft,
        MarkupIcon: Ut,
        MediumIcon: Nt,
        MemoryIcon: Gt,
        MenuIcon: Wt,
        MergeIcon: Kt,
        MirrorIcon: Yt,
        MobileIcon: qt,
        MoonIcon: Vt,
        NutIcon: Zt,
        OutboxIcon: zt,
        OutlineIcon: A,
        PaintBrushIcon: Jt,
        PaperClipIcon: Qt,
        ParagraphIcon: Xt,
        PassedIcon: $t,
        PhoneIcon: jt,
        PhotoDragIcon: or,
        PhotoIcon: nr,
        PinAltIcon: er,
        PinIcon: cr,
        PlayBackIcon: tr,
        PlayIcon: rr,
        PlayNextIcon: Ir,
        PlusIcon: ar,
        PointerDefaultIcon: lr,
        PointerHandIcon: ir,
        PowerIcon: sr,
        PrintIcon: ur,
        ProceedIcon: dr,
        ProfileIcon: pr,
        PullRequestIcon: mr,
        QuestionIcon: Sr,
        RSSIcon: Cr,
        RedirectIcon: hr,
        ReduxIcon: Ar,
        RefreshIcon: Tr,
        ReplyIcon: _r,
        RepoIcon: br,
        RequestChangeIcon: gr,
        RewindIcon: yr,
        RulerIcon: Or,
        SearchIcon: Br,
        ShareAltIcon: fr,
        ShareIcon: kr,
        ShieldIcon: Rr,
        SideBySideIcon: Pr,
        SidebarAltIcon: Lr,
        SidebarAltToggleIcon: wr,
        SidebarIcon: Er,
        SidebarToggleIcon: Dr,
        SpeakerIcon: vr,
        StackedIcon: xr,
        StarHollowIcon: Hr,
        StarIcon: Mr,
        StatusFailIcon: Fr,
        StatusPassIcon: Ur,
        StatusWarnIcon: Nr,
        StickerIcon: Gr,
        StopAltIcon: Wr,
        StopIcon: Kr,
        StorybookIcon: Yr,
        StructureIcon: qr,
        SubtractIcon: Vr,
        SunIcon: Zr,
        SupportIcon: zr,
        SwitchAltIcon: Jr,
        SyncIcon: Qr,
        TabletIcon: Xr,
        ThumbsUpIcon: $r,
        TimeIcon: jr,
        TimerIcon: oI,
        TransferIcon: nI,
        TrashIcon: eI,
        TwitterIcon: cI,
        TypeIcon: tI,
        UbuntuIcon: rI,
        UndoIcon: II,
        UnfoldIcon: aI,
        UnlockIcon: lI,
        UnpinIcon: iI,
        UploadIcon: sI,
        UserAddIcon: uI,
        UserAltIcon: dI,
        UserIcon: pI,
        UsersIcon: mI,
        VSCodeIcon: SI,
        VerifiedIcon: CI,
        VideoIcon: hI,
        WandIcon: AI,
        WatchIcon: TI,
        WindowsIcon: _I,
        WrenchIcon: bI,
        XIcon: gI,
        YoutubeIcon: yI,
        ZoomIcon: OI,
        ZoomOutIcon: BI,
        ZoomResetIcon: fI,
        iconList: kI,
      } = __STORYBOOK_ICONS__
    var i = 'storybook/outline',
      T = 'outline',
      _ = u(function () {
        let [c, r] = S(),
          s = C(),
          I = [!0, 'true'].includes(c[T]),
          a = d(() => r({ [T]: !I }), [I])
        return (
          p(() => {
            s.setAddonShortcut(i, {
              label: 'Toggle Outline',
              defaultShortcut: ['alt', 'O'],
              actionName: 'outline',
              showInMenu: !1,
              action: a,
            })
          }, [a, s]),
          t.createElement(
            h,
            {
              key: 'outline',
              active: I,
              title: 'Apply outlines to the preview',
              onClick: a,
            },
            t.createElement(A, null),
          )
        )
      })
    l.register(i, () => {
      l.add(i, {
        title: 'Outline',
        type: m.TOOL,
        match: ({ viewMode: c, tabId: r }) =>
          !!(c && c.match(/^(story|docs)$/)) && !r,
        render: () => t.createElement(_, null),
      })
    })
  })()
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e,
  )
}
